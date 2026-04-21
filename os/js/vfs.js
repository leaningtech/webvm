var VFS = {
    db: null,
    
    init: function() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open('Win11_VFS', 2); // Bumped version for new features
            
            request.onupgradeneeded = e => {
                VFS.db = e.target.result;
                
                // Create files store if it doesn't exist
                if (!VFS.db.objectStoreNames.contains('files')) {
                    const store = VFS.db.createObjectStore('files', { keyPath: 'name' });
                    // Add indexes for better querying
                    store.createIndex('type', 'type', { unique: false });
                    store.createIndex('path', 'path', { unique: false });
                    store.createIndex('created', 'created', { unique: false });
                }
            };
            
            request.onsuccess = e => { 
                VFS.db = e.target.result; 
                console.log('VFS initialized');
                resolve(); 
            };
            
            request.onerror = e => {
                console.error('VFS init error:', e);
                reject(e);
            };
        });
    },
    
    // Enhanced saveFile with metadata
    saveFile: function(name, type, content, metadata = {}) {
        return new Promise((resolve, reject) => {
            try {
                const tx = VFS.db.transaction('files', 'readwrite');
                
                const fileObject = {
                    name: name,
                    type: type,
                    content: content,
                    size: this._getSize(content),
                    created: metadata.created || new Date().toISOString(),
                    modified: new Date().toISOString(),
                    path: metadata.path || '/downloads',
                    source: metadata.source || 'user', // 'user', 'webvm', 'upload', etc.
                    ...metadata
                };
                
                tx.objectStore('files').put(fileObject);
                
                tx.oncomplete = () => { 
                    console.log('File saved:', name);
                    resolve(fileObject);
                    window.dispatchEvent(new CustomEvent('vfs-updated', { 
                        detail: { action: 'save', file: fileObject } 
                    }));
                };
                
                tx.onerror = (e) => {
                    console.error('Save error:', e);
                    reject(e);
                };
            } catch(err) {
                reject(err);
            }
        });
    },
    
    // Original saveFile for compatibility
    saveLegacy: function(name, type, content) {
        return this.saveFile(name, type, content);
    },
    
    getFiles: function(filter = {}) {
        return new Promise((resolve, reject) => {
            try {
                const tx = VFS.db.transaction('files', 'readonly');
                const request = tx.objectStore('files').getAll();
                
                request.onsuccess = () => {
                    let files = request.result;
                    
                    // Apply filters
                    if (filter.type) {
                        files = files.filter(f => f.type === filter.type);
                    }
                    if (filter.path) {
                        files = files.filter(f => f.path === filter.path);
                    }
                    if (filter.source) {
                        files = files.filter(f => f.source === filter.source);
                    }
                    
                    resolve(files);
                };
                
                request.onerror = (e) => reject(e);
            } catch(err) {
                reject(err);
            }
        });
    },
    
    getFile: function(name) {
        return new Promise((resolve, reject) => {
            try {
                const tx = VFS.db.transaction('files', 'readonly');
                const request = tx.objectStore('files').get(name);
                
                request.onsuccess = () => resolve(request.result);
                request.onerror = (e) => reject(e);
            } catch(err) {
                reject(err);
            }
        });
    },
    
    deleteFile: function(name) {
        return new Promise((resolve, reject) => {
            try {
                const tx = VFS.db.transaction('files', 'readwrite');
                tx.objectStore('files').delete(name);
                
                tx.oncomplete = () => { 
                    console.log('File deleted:', name);
                    resolve();
                    window.dispatchEvent(new CustomEvent('vfs-updated', { 
                        detail: { action: 'delete', name: name } 
                    }));
                };
                
                tx.onerror = (e) => reject(e);
            } catch(err) {
                reject(err);
            }
        });
    },
    
    // Update file metadata or content
    updateFile: function(name, updates) {
        return new Promise(async (resolve, reject) => {
            try {
                const existing = await this.getFile(name);
                if (!existing) {
                    reject(new Error('File not found'));
                    return;
                }
                
                const updated = {
                    ...existing,
                    ...updates,
                    modified: new Date().toISOString()
                };
                
                const tx = VFS.db.transaction('files', 'readwrite');
                tx.objectStore('files').put(updated);
                
                tx.oncomplete = () => {
                    resolve(updated);
                    window.dispatchEvent(new CustomEvent('vfs-updated', { 
                        detail: { action: 'update', file: updated } 
                    }));
                };
                
                tx.onerror = (e) => reject(e);
            } catch(err) {
                reject(err);
            }
        });
    },
    
    // Check if file exists
    exists: function(name) {
        return new Promise((resolve) => {
            this.getFile(name)
                .then(file => resolve(!!file))
                .catch(() => resolve(false));
        });
    },
    
    // Get file info without content (lighter)
    getFileInfo: function(name) {
        return new Promise(async (resolve, reject) => {
            try {
                const file = await this.getFile(name);
                if (!file) {
                    reject(new Error('File not found'));
                    return;
                }
                
                // Return metadata without heavy content
                const { content, ...info } = file;
                resolve(info);
            } catch(err) {
                reject(err);
            }
        });
    },
    
    // Download file from VFS to user's computer
    downloadFile: function(name) {
        return new Promise(async (resolve, reject) => {
            try {
                const file = await this.getFile(name);
                if (!file) {
                    reject(new Error('File not found'));
                    return;
                }
                
                const blob = this._contentToBlob(file.content, file.type);
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = name;
                a.click();
                URL.revokeObjectURL(url);
                
                resolve();
            } catch(err) {
                reject(err);
            }
        });
    },
    
    // Import file from WebVM
    importFromWebVM: function(filename, content, mimeType) {
        const metadata = {
            source: 'webvm',
            path: '/webvm-downloads',
            mimeType: mimeType
        };
        
        return this.saveFile(filename, mimeType || 'application/octet-stream', content, metadata);
    },
    
    // Export file to WebVM (prepare for upload)
    exportToWebVM: function(name) {
        return new Promise(async (resolve, reject) => {
            try {
                const file = await this.getFile(name);
                if (!file) {
                    reject(new Error('File not found'));
                    return;
                }
                
                // Convert content to base64 for safe transmission
                const content = this._contentToBase64(file.content);
                
                resolve({
                    filename: name,
                    content: content,
                    type: file.type,
                    size: file.size
                });
            } catch(err) {
                reject(err);
            }
        });
    },
    
    // Get storage usage
    getStorageInfo: function() {
        return new Promise(async (resolve) => {
            try {
                const files = await this.getFiles();
                const totalSize = files.reduce((sum, f) => sum + (f.size || 0), 0);
                const fileCount = files.length;
                
                // Get quota if available
                let quota = null;
                let usage = null;
                
                if (navigator.storage && navigator.storage.estimate) {
                    const estimate = await navigator.storage.estimate();
                    quota = estimate.quota;
                    usage = estimate.usage;
                }
                
                resolve({
                    files: fileCount,
                    totalSize: totalSize,
                    totalSizeFormatted: this._formatBytes(totalSize),
                    quota: quota,
                    usage: usage,
                    quotaFormatted: quota ? this._formatBytes(quota) : null,
                    usageFormatted: usage ? this._formatBytes(usage) : null
                });
            } catch(err) {
                resolve({ error: err.message });
            }
        });
    },
    
    // Clear all files (with confirmation)
    clearAll: function(confirm = true) {
        if (confirm && !window.confirm('Delete ALL files? This cannot be undone!')) {
            return Promise.resolve(false);
        }
        
        return new Promise((resolve, reject) => {
            try {
                const tx = VFS.db.transaction('files', 'readwrite');
                tx.objectStore('files').clear();
                
                tx.oncomplete = () => {
                    console.log('VFS cleared');
                    resolve(true);
                    window.dispatchEvent(new CustomEvent('vfs-updated', { 
                        detail: { action: 'clear' } 
                    }));
                };
                
                tx.onerror = (e) => reject(e);
            } catch(err) {
                reject(err);
            }
        });
    },
    
    // Helper: Get size of content
    _getSize: function(content) {
        if (!content) return 0;
        if (typeof content === 'string') return new Blob([content]).size;
        if (content instanceof Blob) return content.size;
        if (content instanceof ArrayBuffer) return content.byteLength;
        return JSON.stringify(content).length;
    },
    
    // Helper: Convert content to Blob
    _contentToBlob: function(content, type) {
        if (content instanceof Blob) return content;
        if (typeof content === 'string') return new Blob([content], { type });
        if (content instanceof ArrayBuffer) return new Blob([content], { type });
        return new Blob([JSON.stringify(content)], { type });
    },
    
    // Helper: Convert content to base64
    _contentToBase64: function(content) {
        if (typeof content === 'string') {
            return btoa(unescape(encodeURIComponent(content)));
        }
        // Handle ArrayBuffer, Blob, etc.
        return btoa(String.fromCharCode(...new Uint8Array(content)));
    },
    
    // Helper: Format bytes
    _formatBytes: function(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
    },
    
    // Export all files as JSON (backup)
    exportAll: function() {
        return new Promise(async (resolve, reject) => {
            try {
                const files = await this.getFiles();
                const exportData = {
                    version: 2,
                    exported: new Date().toISOString(),
                    files: files
                };
                
                const blob = new Blob([JSON.stringify(exportData, null, 2)], { 
                    type: 'application/json' 
                });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'vfs-backup-' + Date.now() + '.json';
                a.click();
                URL.revokeObjectURL(url);
                
                resolve(files.length);
            } catch(err) {
                reject(err);
            }
        });
    },
    
    // Import files from JSON backup
    importAll: function(jsonData) {
        return new Promise(async (resolve, reject) => {
            try {
                const data = typeof jsonData === 'string' ? JSON.parse(jsonData) : jsonData;
                
                if (!data.files || !Array.isArray(data.files)) {
                    reject(new Error('Invalid backup format'));
                    return;
                }
                
                let imported = 0;
                for (const file of data.files) {
                    await this.saveFile(file.name, file.type, file.content, file);
                    imported++;
                }
                
                resolve(imported);
            } catch(err) {
                reject(err);
            }
        });
    }
};

// Auto-initialize VFS when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => VFS.init());
} else {
    VFS.init();
}

// Make VFS globally available
window.VFS = VFS;