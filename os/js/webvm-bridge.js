// os/js/webvm-bridge.js
// Enhanced bridge with VFS integration

class WebVMBridge {
    constructor() {
        this.setupMessageListener();
        this.ensureVFS();
    }
    
    async ensureVFS() {
        // Wait for VFS to be ready
        if (!window.VFS) {
            await new Promise(resolve => {
                const checkVFS = setInterval(() => {
                    if (window.VFS && window.VFS.db) {
                        clearInterval(checkVFS);
                        resolve();
                    }
                }, 100);
            });
        }
        console.log('WebVM Bridge ready with VFS');
    }
    
    setupMessageListener() {
        window.addEventListener('message', async (event) => {
            // Security check - allow same origin or WebVM iframe
            // if (event.origin !== window.location.origin) return;
            
            const { type, data } = event.data;
            
            switch(type) {
                case 'WEBVM_FILE_DOWNLOAD':
                    await this.handleFileDownload(data);
                    break;
                    
                case 'WEBVM_FILE_UPLOAD':
                    await this.handleFileUpload(data);
                    break;
                    
                case 'WEBVM_REQUEST_FILE':
                    await this.handleFileRequest(data);
                    break;
                    
                case 'WEBVM_LIST_FILES':
                    await this.handleListFiles(data);
                    break;
            }
        });
    }
    
    async handleFileDownload(data) {
        const { filename, content, mimeType, metadata = {} } = data;
        
        try {
            await this.ensureVFS();
            
            // Save to VFS with WebVM source
            const savedFile = await window.VFS.importFromWebVM(
                filename, 
                content, 
                mimeType
            );
            
            console.log('File downloaded from WebVM:', filename);
            
            // Show notification
            this.showNotification(`Downloaded: ${filename}`, 'success');
            
            // Also trigger browser download
            await window.VFS.downloadFile(filename);
            
            // Send confirmation back to WebVM
            this.sendToWebVM('OS_FILE_SAVED', {
                filename: filename,
                success: true
            });
            
        } catch(err) {
            console.error('Download error:', err);
            this.showNotification(`Download failed: ${filename}`, 'error');
            
            this.sendToWebVM('OS_FILE_SAVED', {
                filename: filename,
                success: false,
                error: err.message
            });
        }
    }
    
    async handleFileUpload(data) {
        const { filename } = data;
        
        try {
            await this.ensureVFS();
            
            // Get file from VFS
            const fileData = await window.VFS.exportToWebVM(filename);
            
            // Send to WebVM
            this.sendToWebVM('OS_FILE_UPLOAD', fileData);
            
            this.showNotification(`Uploaded ${filename} to WebVM`, 'success');
            
        } catch(err) {
            console.error('Upload error:', err);
            this.showNotification(`Upload failed: ${filename}`, 'error');
        }
    }
    
    async handleFileRequest(data) {
        const { filename } = data;
        
        try {
            await this.ensureVFS();
            
            const file = await window.VFS.getFile(filename);
            
            if (file) {
                this.sendToWebVM('OS_FILE_DATA', {
                    filename: filename,
                    content: file.content,
                    type: file.type,
                    exists: true
                });
            } else {
                this.sendToWebVM('OS_FILE_DATA', {
                    filename: filename,
                    exists: false
                });
            }
            
        } catch(err) {
            console.error('File request error:', err);
        }
    }
    
    async handleListFiles(data) {
        try {
            await this.ensureVFS();
            
            const filter = data.filter || {};
            const files = await window.VFS.getFiles(filter);
            
            // Send file list (without heavy content)
            const fileList = files.map(f => ({
                name: f.name,
                type: f.type,
                size: f.size,
                created: f.created,
                modified: f.modified,
                path: f.path,
                source: f.source
            }));
            
            this.sendToWebVM('OS_FILE_LIST', {
                files: fileList,
                count: fileList.length
            });
            
        } catch(err) {
            console.error('List files error:', err);
        }
    }
    
    sendToWebVM(type, data) {
        // Find WebVM iframe
        const terminalFrame = document.querySelector('iframe[src*="index.html"]') ||
                             document.querySelector('iframe[src*="webvm"]');
        
        if (terminalFrame && terminalFrame.contentWindow) {
            terminalFrame.contentWindow.postMessage({
                type: type,
                data: data
            }, '*');
        } else {
            console.warn('WebVM iframe not found');
        }
    }
    
    showNotification(message, type = 'info') {
        console.log(`[${type.toUpperCase()}] ${message}`);
        
        // If you have a notification system in your OS
        if (window.OS && window.OS.notify) {
            window.OS.notify(message, type);
            return;
        }
        
        // Fallback: Simple toast notification
        const toast = document.createElement('div');
        toast.className = `vfs-notification vfs-${type}`;
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'error' ? '#ef4444' : type === 'success' ? '#10b981' : '#3b82f6'};
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            z-index: 100000;
            font-family: system-ui;
            font-size: 14px;
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
}

// Add animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(400px); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Initialize bridge
const webvmBridge = new WebVMBridge();
window.WebVMBridge = webvmBridge;

// Add convenience functions to global scope
window.downloadFromWebVM = (filename, content, mimeType) => {
    webvmBridge.handleFileDownload({ filename, content, mimeType });
};

window.uploadToWebVM = (filename) => {
    webvmBridge.handleFileUpload({ filename });
};

console.log('WebVM Bridge loaded');