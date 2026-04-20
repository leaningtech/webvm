
var VFS = {
    db: null,
    init: function() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open('Win11_VFS', 1);
            request.onupgradeneeded = e => {
                VFS.db = e.target.result;
                if (!VFS.db.objectStoreNames.contains('files')) {
                    VFS.db.createObjectStore('files', { keyPath: 'name' });
                }
            };
            request.onsuccess = e => { VFS.db = e.target.result; resolve(); };
            request.onerror = e => reject(e);
        });
    },
    saveFile: function(name, type, content) {
        return new Promise((resolve) => {
            const tx = VFS.db.transaction('files', 'readwrite');
            tx.objectStore('files').put({ name, type, content });
            tx.oncomplete = () => { resolve(); window.dispatchEvent(new Event('vfs-updated')); };
        });
    },
    getFiles: function() {
        return new Promise((resolve) => {
            const tx = VFS.db.transaction('files', 'readonly');
            const request = tx.objectStore('files').getAll();
            request.onsuccess = () => resolve(request.result);
        });
    },
    deleteFile: function(name) {
        return new Promise((resolve) => {
            const tx = VFS.db.transaction('files', 'readwrite');
            tx.objectStore('files').delete(name);
            tx.oncomplete = () => { resolve(); window.dispatchEvent(new Event('vfs-updated')); };
        });
    }
};
