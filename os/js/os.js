var topZ = 100;
var installedApps = JSON.parse(localStorage.getItem('installedApps') || '[]');
var appRegistry = JSON.parse(localStorage.getItem('dynamicAppRegistry') || '[]');
window.browserEngines = JSON.parse(localStorage.getItem('browserEngines') || '[]'); 
var openWindows = []; 
var pinnedApps = ['file-explorer', 'browser', 'settings', 'updates', 'task-manager']; 
var ADMINS = ["jkhyer@bluevalleyk12.net", "jaxonkhyer@gmail.com"];
var volumeLevel = 100;
var OPEN_WINDOWS = [];

// Load saved windows into memory
try {
    OPEN_WINDOWS = JSON.parse(localStorage.getItem(WINDOW_STORAGE_KEY) || "[]");
} catch (e) {
    OPEN_WINDOWS = [];
}
document.addEventListener('contextmenu', e => { e.preventDefault(); hideContextMenu(); });
document.addEventListener('click', (e) => {
    hideContextMenu();
    document.getElementById('action-center').classList.add('hidden');
    if(e.target.id === 'desktop') document.querySelectorAll('.desktop-icon').forEach(el => el.classList.remove('selected'));
});
// --- WINDOW RESTORE SYSTEM ---

var WINDOW_STORAGE_KEY = "dgpos_windows";

function saveWindowState(windows) {
    try {
        localStorage.setItem(WINDOW_STORAGE_KEY, JSON.stringify(windows));
    } catch (e) {
        console.warn("Save failed", e);
    }
}

function loadWindowState() {
    try {
        return JSON.parse(localStorage.getItem(WINDOW_STORAGE_KEY) || "[]");
    } catch (e) {
        return [];
    }
}
// --------------------------------------------------------
// GLOBAL AUTH SYSTEM (Single Sign-On with JSONP Bypass)
// --------------------------------------------------------
let isLoginMode = true;

function toggleAuthMode() {
    isLoginMode = !isLoginMode;
    document.getElementById('auth-title').innerText = isLoginMode ? "Welcome Back" : "Create Account";
    document.getElementById('auth-btn').innerText = isLoginMode ? "Unlock" : "Sign Up";
    document.getElementById('auth-toggle').innerText = isLoginMode ? "Need an account? Sign up here" : "Already have an account? Login here";
    document.getElementById('login-error').style.display = 'none';
}

function showAuthError(msg) {
    const err = document.getElementById('login-error');
    err.innerText = msg;
    err.style.display = 'block';
}

// 1. THE ULTIMATE BYPASS: Disguises the data as a Script Tag
function jsonpRequest(url, payload) {
    return new Promise((resolve, reject) => {
        const callbackName = 'jsonp_cb_' + Math.round(1000000 * Math.random());
        
        window[callbackName] = function(data) {
            resolve(data);
            delete window[callbackName];
            document.body.removeChild(script);
        };
        
        const script = document.createElement('script');
        let queryString = `?callback=${callbackName}`;
        for (let key in payload) {
            queryString += `&${key}=${encodeURIComponent(payload[key])}`;
        }
        
        script.src = url + queryString;
        script.onerror = () => {
            reject(new Error("CORS or Network Failure"));
            delete window[callbackName];
            document.body.removeChild(script);
        };
        
        document.body.appendChild(script);
    });
}

// 2. CHECK AUTH
function checkAuth() {
    const email = localStorage.getItem('os_email');
    const pass = localStorage.getItem('os_password');
    const url = localStorage.getItem('chat_backend_url');
    
    // Auto-fill all the fields (including password)
    if (url) document.getElementById('backend-url').value = url;
    if (email) document.getElementById('login-email').value = email;
    if (pass) document.getElementById('login-pass').value = pass;

    // ALWAYS show the lock screen so the user has to click Unlock
    document.getElementById('lock-screen').classList.remove('hidden');
}

// Listen for the "Enter" key on all login fields
document.addEventListener('DOMContentLoaded', () => {
    ['backend-url', 'login-email', 'login-pass'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') submitAuth();
            });
        }
    });
    checkAuth();
});

// 3. SUBMIT AUTH
async function submitAuth() {
    const url = document.getElementById('backend-url').value.trim();
    const email = document.getElementById('login-email').value.toLowerCase().trim();
    const pass = document.getElementById('login-pass').value.trim();
    const btn = document.getElementById('auth-btn');
    
    if(!url || !email || !pass) return showAuthError("Please fill out all fields.");
    if(!url.includes('/exec')) return showAuthError("URL must contain /exec");
    
    localStorage.setItem('chat_backend_url', url);
    localStorage.setItem('os_email', email);
    
    btn.innerText = "Connecting...";
    document.getElementById('login-error').style.display = 'none';

    try {
        const payload = { action: isLoginMode ? 'login' : 'register', email: email, password: pass };
        
        // Pushing data via the JSONP bypass
        const data = await jsonpRequest(url, payload);
        
        if (data.success) {
            localStorage.setItem('os_password', pass);
            localStorage.setItem('chat_email', email);
            localStorage.setItem('chat_password', pass);
            unlockOS(email);
        } else {
            showAuthError(data.error || "Authentication Failed");
            btn.innerText = isLoginMode ? "Unlock" : "Sign Up";
        }
    } catch(e) {
        showAuthError("Connection Failed. Did you deploy New Version in Google Scripts?");
        btn.innerText = isLoginMode ? "Unlock" : "Sign Up";
    }
}

function unlockOS(email) {
    const ls = document.getElementById('lock-screen');
    ls.style.filter = "blur(20px)";
    ls.style.opacity = "0";
    setTimeout(() => { 
        ls.classList.add('hidden'); 
        initOS(email); 
    }, 500);
}

// Run instantly when page loads
document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
});

// --------------------------------------------------------
// CORE OS INIT
// --------------------------------------------------------
async function initOS(userEmail) {
    window.currentUser = userEmail;
    const savedTheme = localStorage.getItem('os_theme') || '#0078D4';
    document.documentElement.style.setProperty('--accent', savedTheme);
    const savedWallpaper = localStorage.getItem('wallpaper');
    if (savedWallpaper) document.body.style.backgroundImage = `url('${savedWallpaper}')`;
    
    await VFS.init();
    renderDesktop(); 
    renderAppStore(); 
    renderTaskbar(); 
    initDragSelection();
    silentUpdateAppList();
    checkForGitHubUpdates();
    updateClockDate();
    
    setInterval(updateClockDate, 1000);
    document.body.addEventListener('click', (e) => {
        if(!e.target.closest('#start-menu') && !e.target.closest('#start-btn')) document.getElementById('start-menu').classList.add('hidden');
    });
}

function updateClockDate() {
    const d = new Date();
    document.getElementById('clock-time').innerText = d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    document.getElementById('clock-date').innerText = d.toLocaleDateString();
    document.getElementById('ac-calendar').innerText = `${d.toDateString()} ${d.getHours()}:${String(d.getMinutes()).padStart(2,'0')}`;
}

// --------------------------------------------------------
// WINDOW MANAGER (WITH RESIZING)
// --------------------------------------------------------
function openWindow(appOrTitle, url, contentHTML = null, fallbackAppId = null) {
    const title = typeof appOrTitle === 'string' ? appOrTitle : appOrTitle.name;
    const appId = typeof appOrTitle === 'string' ? fallbackAppId : appOrTitle.id;
    const headerIconHTML = typeof appOrTitle === 'string' ? '' : getAppIconHTML(appOrTitle, true);

    const win = document.createElement('div'); 
    win.className = 'window';
    win.style.width = '800px'; 
    win.style.height = '550px'; 
    win.style.left = '150px'; 
    win.style.top = '80px';
    topZ++; 
    win.style.zIndex = topZ;

    win.innerHTML = `
        <div class="window-header">
            <div class="window-title">${headerIconHTML} ${title}</div>
            <div class="window-controls">
            <div class="win-btn minimize" style="font-size: 16px;">&minus;</div>
            <div class="win-btn box" style="font-size: 16px;">&#9633;</div>
            <div class="win-btn open-tab" style="font-size: 14px;">&#10697;</div>
            <div class="win-btn close" style="font-size: 14px;">&#10005;</div>            </div>
        </div>
        <div class="resize-handle resizer-rw"></div>
        <div class="resize-handle resizer-ns"></div>
        <div class="resize-handle resizer-br"></div>
        <div class="window-content">
            <div class="drag-shield"></div>
            ${contentHTML ? contentHTML : `<iframe src="${url}" sandbox="allow-scripts allow-same-origin allow-forms allow-popups"></iframe>`}
        </div>
    `;
    document.body.appendChild(win);
// --- SAVE WINDOW STATE ---
var winData = {
    title: title,
    url: url,
    width: win.style.width,
    height: win.style.height,
    left: win.style.left,
    top: win.style.top
};

OPEN_WINDOWS.push(winData);
saveWindowState(OPEN_WINDOWS);
    openWindows.push({ winElement: win, appId: appId });

    renderTaskbar();

    const header = win.querySelector('.window-header');
// --- OPEN IN NEW TAB FEATURE ---
const openTabBtn = win.querySelector('.open-tab');
const iframe = win.querySelector('.window-content iframe');

if (openTabBtn) {
    openTabBtn.addEventListener('click', () => {
        try {
            const newTab = window.open('about:blank', '_blank');

            if (!newTab) {
                alert("Popup blocked!");
                return;
            }

            // If iframe exists, try to clone content
            if (iframe) {
                try {
                    const doc = iframe.contentDocument || iframe.contentWindow.document;

                    newTab.document.open();
                    newTab.document.write(doc.documentElement.outerHTML);
                    newTab.document.close();
                } catch (err) {
                    // fallback: just open the source
                    newTab.location.href = iframe.src;
                }
            } else {
                newTab.document.write("<h1>No iframe content</h1>");
            }

        } catch (err) {
            console.error("Open in new tab failed:", err);
        }
    });
}
    const snapPreview = document.getElementById('snap-preview');
    let isDown = false, startX, startY, winX, winY, snapMode = '';

    // Resizing Logic
    const resizers = win.querySelectorAll('.resize-handle');
    resizers.forEach(resizer => {
        resizer.addEventListener('mousedown', (e) => {
            e.stopPropagation(); e.preventDefault();
            isDown = true;
            startX = e.clientX; startY = e.clientY;
            winX = parseFloat(win.style.width); winY = parseFloat(win.style.height);
            win.style.position = 'absolute'; 
            document.querySelectorAll('.drag-shield').forEach(s => s.style.display = 'block');
            
            function onMouseMove(me) {
                if(!isDown) return;
                if(resizer.classList.contains('resizer-rw')) { win.style.width = (winX + me.clientX - startX) + 'px'; }
                else if(resizer.classList.contains('resizer-ns')) { win.style.height = (winY + me.clientY - startY) + 'px'; }
                else if(resizer.classList.contains('resizer-br')) { 
                    win.style.width = (winX + me.clientX - startX) + 'px';
                    win.style.height = (winY + me.clientY - startY) + 'px';
// --- UPDATE SIZE IN STORAGE ---
var index = openWindows.findIndex(w => w.winElement === win);
if (index !== -1 && OPEN_WINDOWS[index]) {
    OPEN_WINDOWS[index].width = win.style.width;
    OPEN_WINDOWS[index].height = win.style.height;
    saveWindowState(OPEN_WINDOWS);
}
                }
            }
            function onMouseUp() {
                isDown = false;
                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);
                document.querySelectorAll('.drag-shield').forEach(s => s.style.display = 'none');
            }
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        });
    });

    // Dragging Logic
    header.addEventListener('mousedown', e => {
        if(e.target.closest('.window-controls')) return; 
        isDown = true; bringToFront(win);
        startX = e.clientX; startY = e.clientY;
        if (win.dataset.snapped) { 
            win.style.width = win.dataset.oldWidth; 
            win.style.height = win.dataset.oldHeight; 
            win.dataset.snapped = ""; 
            winX = startX - (parseInt(win.style.width) / 2); 
            win.style.left = winX + 'px'; 
            win.style.top = '80px'; 
        } else { winX = win.offsetLeft; }
        winY = win.offsetTop;
        document.querySelectorAll('.drag-shield').forEach(s => s.style.display = 'block');
    });

    window.addEventListener('mousemove', e => {
        if(!isDown || e.target.classList.contains('resize-handle')) return;
        win.style.left = (winX + e.clientX - startX) + 'px';
        win.style.top = (winY + e.clientY - startY) + 'px';
        
        if (e.clientY < 10) { snapMode = 'top'; snapPreview.style.top = '0'; snapPreview.style.left = '0'; snapPreview.style.width = '100%'; snapPreview.style.height = 'calc(100% - 52px)'; snapPreview.classList.remove('hidden'); }
        else if (e.clientX < 10) { snapMode = 'left'; snapPreview.style.top = '0'; snapPreview.style.left = '0'; snapPreview.style.width = '50%'; snapPreview.style.height = 'calc(100% - 52px)'; snapPreview.classList.remove('hidden'); }
        else if (e.clientX > window.innerWidth - 10) { snapMode = 'right'; snapPreview.style.top = '0'; snapPreview.style.left = '50%'; snapPreview.style.width = '50%'; snapPreview.style.height = 'calc(100% - 52px)'; snapPreview.classList.remove('hidden'); }
        else { snapMode = ''; snapPreview.classList.add('hidden'); }
    });
// --- UPDATE POSITION IN STORAGE ---
var index = openWindows.findIndex(w => w.winElement === win);
if (index !== -1 && OPEN_WINDOWS[index]) {
    OPEN_WINDOWS[index].left = win.style.left;
    OPEN_WINDOWS[index].top = win.style.top;
    saveWindowState(OPEN_WINDOWS);
}

    // UPDATED SNAPPING LOGIC WITH ANIMATIONS
    window.addEventListener('mouseup', () => {
        if(isDown && snapMode !== '') {
            win.style.transition = 'width 0.25s ease, height 0.25s ease, top 0.25s ease, left 0.25s ease';
            
            win.dataset.oldWidth = win.style.width; 
            win.dataset.oldHeight = win.style.height; 
            win.dataset.snapped = "true"; 
            win.style.top = '0'; 
            win.style.height = 'calc(100% - 52px)';
            
            if (snapMode === 'top') { win.style.left = '0'; win.style.width = '100%'; }
            if (snapMode === 'left') { win.style.left = '0'; win.style.width = '50%'; }
            if (snapMode === 'right') { win.style.left = '50%'; win.style.width = '50%'; }
            
            setTimeout(() => {
                win.style.transition = 'opacity 0.2s, transform 0.2s';
            }, 250);
        }
        isDown = false; snapMode = ''; snapPreview.classList.add('hidden');
        document.querySelectorAll('.drag-shield').forEach(s => s.style.display = 'none');
    });

    win.addEventListener('mousedown', () => bringToFront(win));
   win.querySelector('.close').onclick = () => { 
    var index = openWindows.findIndex(w => w.winElement === win);

    if (index !== -1) {
        OPEN_WINDOWS.splice(index, 1);
        saveWindowState(OPEN_WINDOWS);
    }

    win.remove(); 
    openWindows = openWindows.filter(w => w.winElement !== win); 
    renderTaskbar(); 
};
    win.querySelector('.minimize').onclick = () => { win.style.display = 'none'; renderTaskbar(); };
    win.querySelector('.box').onclick = () => {
        if(win.style.width === '100%') { win.style.width = win.dataset.oldWidth || '800px'; win.style.height = win.dataset.oldHeight || '550px'; win.style.left = '150px'; win.style.top = '80px'; win.dataset.snapped = ""; }
        else { win.dataset.oldWidth = win.style.width; win.dataset.oldHeight = win.style.height; win.style.width = '100%'; win.style.height = 'calc(100% - 52px)'; win.style.left = '0'; win.style.top = '0'; win.dataset.snapped = "true"; }
    };
}

// --------------------------------------------------------
// MODALS, API, AND COMMUNICATIONS
// --------------------------------------------------------
window.osModal = function(type, title, message, defaultValue = '') {
    return new Promise((resolve) => {
        const dialog = document.getElementById('os-dialog');
        document.getElementById('dialog-title').innerText = title;
        document.getElementById('dialog-message').innerText = message;
        const input = document.getElementById('dialog-input');
        const btnCancel = document.getElementById('dialog-btn-cancel');
        const btnOk = document.getElementById('dialog-btn-ok');
        
        if(type === 'prompt') { input.style.display = 'block'; input.value = defaultValue; btnCancel.style.display = 'block'; } 
        else if(type === 'confirm') { input.style.display = 'none'; btnCancel.style.display = 'block'; } 
        else { input.style.display = 'none'; btnCancel.style.display = 'none'; }
        
        dialog.classList.remove('hidden');
        if(type === 'prompt') input.focus();
        
        btnOk.onclick = () => { dialog.classList.add('hidden'); resolve(type === 'prompt' ? input.value : true); };
        btnCancel.onclick = () => { dialog.classList.add('hidden'); resolve(type === 'prompt' ? null : false); };
    });
};
window.osAlert = (t,m)=>window.osModal('alert',t,m); 
window.osConfirm = (t,m)=>window.osModal('confirm',t,m); 
window.osPrompt = (t,m,d)=>window.osModal('prompt',t,m,d);

window.addEventListener('message', (e) => {
    if (!e.data || typeof e.data !== 'object') return;
    if (e.data.action === 'notify') showNotification(e.data.title, e.data.msg);
    if (e.data.action === 'openWindow') openWindow(e.data.title || 'App', e.data.url, e.data.content, e.data.appId);
    if (e.data.action === 'changeTheme') {
        document.documentElement.style.setProperty('--accent', e.data.color);
        localStorage.setItem('os_theme', e.data.color);
    }
});

// --------------------------------------------------------
// RENDERERS
// --------------------------------------------------------
function renderDesktop() {
    const desktop = document.getElementById('desktop');
    desktop.innerHTML = '';
    desktop.oncontextmenu = (e) => showContextMenu(e, 'desktop', null);

    appRegistry.forEach(app => {
        if(app.preinstalled || installedApps.includes(app.id)) {
            const icon = document.createElement('div'); icon.className = 'desktop-icon';
            icon.innerHTML = `${getAppIconHTML(app, false)}<span>${app.name}</span>`;
            icon.onclick = (e) => { e.stopPropagation(); document.querySelectorAll('.desktop-icon').forEach(el => el.classList.remove('selected')); icon.classList.add('selected'); };
            icon.ondblclick = () => openWindow(app, app.path);
            icon.oncontextmenu = (e) => { e.stopPropagation(); showContextMenu(e, 'app', app); };
            desktop.appendChild(icon);
        }
    });

    VFS.getFiles().then(files => {
        const rootFiles = files.filter(f => !f.name.includes('/'));
        rootFiles.forEach(file => {
            if(file.type === 'folder') return; 
            const icon = document.createElement('div'); icon.className = 'desktop-icon';
            let ext = file.name.split('.').pop();
            icon.innerHTML = `<div class="icon-placeholder" style="background:#555">${ext.toUpperCase()}</div><span>${file.name}</span>`;
            icon.onclick = (e) => { e.stopPropagation(); document.querySelectorAll('.desktop-icon').forEach(el => el.classList.remove('selected')); icon.classList.add('selected'); };
            icon.ondblclick = () => openFile(file);
            icon.oncontextmenu = (e) => { e.stopPropagation(); showContextMenu(e, 'file', file); };
            desktop.appendChild(icon);
        });
    });
}

function renderAppStore() {
    const store = document.getElementById('store-categories');
    store.innerHTML = '';
    const categories = [...new Set(appRegistry.map(a => a.category || 'Other'))];
    
    categories.forEach(cat => {
        const section = document.createElement('div'); section.innerHTML = `<div class="category-header">${cat}</div>`;
        const grid = document.createElement('div'); grid.className = 'app-grid';
        appRegistry.filter(a => a.category === cat).forEach(app => {
            if(app.preinstalled) return; 
            const btn = document.createElement('div'); btn.className = 'desktop-icon';
            btn.innerHTML = `${getAppIconHTML(app, false)}<span>${app.name}</span>`;
            btn.onclick = async () => {
                if(!installedApps.includes(app.id)) {
                    let doInstall = await window.osConfirm("Install App", `Do you want to install ${app.name}?`);
                    if(doInstall) {
                        installedApps.push(app.id); localStorage.setItem('installedApps', JSON.stringify(installedApps));
                        renderDesktop(); renderAppStore(); renderTaskbar(); showNotification('App Installed', `${app.name} has been added to your desktop.`);
                    }
                } else await window.osAlert("Notice", "App is already installed.");
            };
            grid.appendChild(btn);
        });
        section.appendChild(grid); store.appendChild(section);
    });
}

function renderTaskbar() {
    const taskbar = document.getElementById('taskbar-icons');
    if (!taskbar) return; // Failsafe
    taskbar.innerHTML = ''; 
    const startBtn = document.createElement('div'); startBtn.className = 'taskbar-icon start-btn'; startBtn.id = 'start-btn';
    startBtn.innerHTML = `<img class="start-icon" src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Windows_11_logo.svg">`;
    startBtn.onclick = (e) => { e.stopPropagation(); document.getElementById('start-menu').classList.toggle('hidden'); };
    taskbar.appendChild(startBtn);

    const activeAppIds = [...new Set(openWindows.filter(w => w.appId !== null).map(w => w.appId))];
    const appsToShow = [...new Set([...pinnedApps, ...activeAppIds])];

    appsToShow.forEach(appId => {
        const app = appRegistry.find(a => a.id === appId); if(!app) return;
        const isOpen = activeAppIds.includes(appId);
        const appWins = openWindows.filter(w => w.appId === appId);
        const topAppWin = appWins.length > 0 ? appWins[appWins.length - 1].winElement : null;
        const isActive = topAppWin && topAppWin === openWindows[openWindows.length - 1].winElement && topAppWin.style.display !== 'none';

        const btn = document.createElement('div');
        btn.className = `taskbar-icon ${isOpen ? 'is-open active-app' : ''} ${isActive ? 'is-active' : ''}`;
        btn.innerHTML = getAppIconHTML(app, true);
        btn.onclick = () => {
            if (isOpen) {
                if (isActive) { topAppWin.style.display = 'none'; renderTaskbar(); } 
                else { topAppWin.style.display = 'flex'; bringToFront(topAppWin); }
            } else { openWindow(app, app.path); }
        };
        taskbar.appendChild(btn);
    });
}

// --------------------------------------------------------
// BACKGROUND FETCHERS
// --------------------------------------------------------
async function silentUpdateAppList() {
    let user = '', repo = '';
    const host = window.location.hostname;
    if (host.includes('github.io')) {
        user = host.split('.')[0];
        const pathParts = window.location.pathname.split('/').filter(p => p.length > 0);
        repo = pathParts.length > 0 ? pathParts[0] : host; 
    } else { return; }

    try {
        let newRegistry = []; 
        let newEngines = [];
        
        const fetchFolder = async (folder, isPreinstalled, defaultCategory) => {
            const res = await fetch(`https://api.github.com/repos/${user}/${repo}/contents/apps/${folder}`);
            if (res.ok) {
                const files = await res.json();
                for(let file of files) {
                    if(file.name.endsWith('.html')) {
                        let baseName = file.name.replace('.html', '');
                        let title = baseName.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
                        
                        // ===== FIXED ICON MAP =====
                        const iconMap = {
                            'file-explorer': '📂',
                            'settings': '⚙️',
                            'terminal': '⌨️',
                            'browser': '🌐',
                            'updates': '📢',
                            'task-manager': '📊',
                            'github-editor': '💻',
                            'ai-assistant': '🤖',
                            'messages': '💬',
                            'html-editor': '</>',
                            'github-importer': '📥'
                        };
                        let customIcon = iconMap[baseName] || null;
                        // ==========================

                        if(folder === 'browsers') { 
                            newEngines.push({ id: baseName, name: title, path: file.path }); 
                        } else { 
                            newRegistry.push({ 
                                id: baseName, 
                                name: title, 
                                path: file.path, 
                                category: defaultCategory, 
                                preinstalled: isPreinstalled, 
                                icon: customIcon 
                            }); 
                        }
                    }
                }
            }
        };
        
        await fetchFolder('preinstalled', true, 'System'); 
        await fetchFolder('store', false, 'App Store');
        await fetchFolder('browsers', true, 'System'); 

        if (newRegistry.length > 0) {
            localStorage.setItem('dynamicAppRegistry', JSON.stringify(newRegistry));
            localStorage.setItem('browserEngines', JSON.stringify(newEngines));
            appRegistry = newRegistry; 
            window.browserEngines = newEngines;
            renderDesktop(); 
            renderAppStore(); 
            renderTaskbar();
        }
    } catch(e) { 
        console.warn("Silent app scan failed:", e); 
    }
}

async function checkForGitHubUpdates() {
    try {
        const res = await fetch('https://api.github.com/repos/Dragon-Gaming-Platforms/Web-Operating-System/commits?per_page=1');
        const data = await res.json();
        if (data && data.length > 0) {
            const latestCommit = data[0];
            const savedSha = localStorage.getItem('gh_last_commit_sha');
            if (savedSha && savedSha !== latestCommit.sha) {
                showNotification("Update Available:", `${latestCommit.commit.message}<br><br>Reload your OS to update.`);
            }
            localStorage.setItem('gh_last_commit_sha', latestCommit.sha);
        }
    } catch(e) { }
}

// --------------------------------------------------------
// UI UTILITIES
// --------------------------------------------------------

// UPDATED CONTEXT MENU BUG FIX
function bringToFront(win) {
    hideContextMenu();
    if(win.style.display === 'none') win.style.display = 'flex';
    topZ++; win.style.zIndex = topZ;
    const index = openWindows.findIndex(w => w.winElement === win);
    if(index !== -1) { const obj = openWindows.splice(index, 1)[0]; openWindows.push(obj); }
    renderTaskbar();
}

function showNotification(title, message) {
    const center = document.getElementById('notification-center');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<h4>${title}</h4><p>${message}</p>`;
    center.appendChild(toast);
    try { const audio = new Audio("data:audio/wav;base64,UklGRlIAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YTEAAAAcHR0eHh4fHx8gICAhISEiIiIjIyMkJCQlJSUmJiYnJycoKCgA"); audio.play().catch(e=>{}); } catch(e) {}
    setTimeout(() => { toast.style.animation = 'fadeOut 0.3s ease forwards'; setTimeout(() => toast.remove(), 300); }, 5000);
}

function initDragSelection() {
    const desktop = document.getElementById('desktop');
    const box = document.getElementById('selection-box');
    let isSelecting = false, startX, startY;

    desktop.addEventListener('mousedown', (e) => {
        if(e.target !== desktop) return;
        isSelecting = true; startX = e.clientX; startY = e.clientY;
        box.style.left = startX + 'px'; box.style.top = startY + 'px';
        box.style.width = '0px'; box.style.height = '0px'; box.classList.remove('hidden');
        document.querySelectorAll('.desktop-icon').forEach(el => el.classList.remove('selected'));
        document.querySelectorAll('.drag-shield').forEach(s => s.style.display = 'block');
    });

    window.addEventListener('mousemove', (e) => {
        if(!isSelecting) return;
        const currentX = e.clientX, currentY = e.clientY;
        const x = Math.min(startX, currentX), y = Math.min(startY, currentY);
        const w = Math.abs(currentX - startX), h = Math.abs(currentY - startY);
        box.style.left = x + 'px'; box.style.top = y + 'px'; box.style.width = w + 'px'; box.style.height = h + 'px';
        document.querySelectorAll('.desktop-icon').forEach(icon => {
            const rect = icon.getBoundingClientRect();
            if(rect.left < x + w && rect.right > x && rect.top < y + h && rect.bottom > y) icon.classList.add('selected');
            else icon.classList.remove('selected');
        });
    });

    window.addEventListener('mouseup', () => {
        if(isSelecting) {
            isSelecting = false; box.classList.add('hidden');
            document.querySelectorAll('.drag-shield').forEach(s => s.style.display = 'none');
        }
    });
}

function getAppIconHTML(app, isSmall = false) {
    const fallbackClass = isSmall ? 'icon-placeholder-small' : 'icon-placeholder';
    if (app.icon) {
        if (app.icon.length <= 2) return `<div class="${fallbackClass}" style="background: transparent; font-size: ${isSmall ? '18px' : '36px'}; box-shadow: none;">${app.icon}</div>`;
        return `<img src="${app.icon}" class="${fallbackClass}" style="background: transparent; box-shadow: none; object-fit: contain;">`;
    }
    const pathParts = app.path.split('/'); const baseName = pathParts.pop().replace('.html', ''); const folderPath = pathParts.join('/'); 
    return `<img src="${folderPath}/icons/${baseName}.png" class="${fallbackClass}" style="background:transparent; box-shadow:none; object-fit:contain;" onerror="this.onerror=null; this.src='${folderPath}/icons/${baseName}.jpg'; this.onerror=function(){ const d = document.createElement('div'); d.className='${fallbackClass}'; d.innerText='${app.name.charAt(0)}'; this.parentNode.replaceChild(d, this); }">`;
}

function openFile(file) {
    const ext = file.name.split('.').pop().toLowerCase();
    
    // 1. TEXT & CODE FILES (Opens in Code Editor)
    if(['txt', 'html', 'js', 'css', 'json'].includes(ext)) {
        const safeContent = file.content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        const editorHTML = `
            <div style="display:flex; flex-direction:column; height:100%; background:#1e1e1e;">
                <div style="padding:8px 15px; background:#2d2d2d; border-bottom:1px solid #444; font-size:12px; color:#aaa; display:flex; justify-content:space-between;">
                    <span>📝 Editing: ${file.name}</span>
                    <span style="color:#60cdff">Auto-saves as you type</span>
                </div>
                <textarea spellcheck="false" style="flex:1; padding:15px; background:#1e1e1e; color:#d4d4d4; border:none; outline:none; font-family:'Consolas', monospace; font-size:13px; resize:none; white-space:pre; overflow:auto;" oninput="window.parent.VFS.saveFile('${file.name}', '${file.type}', this.value)">${safeContent}</textarea>
            </div>
        `;
        openWindow(file.name.split('/').pop(), null, editorHTML);
    }
    // 2. EXECUTABLE APPS (.exe compiled from HTML)
    else if (ext === 'exe') {
        const safeContent = file.content.replace(/"/g, '&quot;');
        const exeHTML = `<iframe srcdoc="${safeContent}" style="width:100%; height:100%; border:none; background:#fff; pointer-events:auto;" sandbox="allow-scripts allow-forms allow-popups allow-same-origin"></iframe>`;
        // Opens exactly like a system app!
        openWindow(file.name.split('/').pop(), null, exeHTML);
    }
    // 3. IMAGES
    else if(['png', 'jpg', 'jpeg', 'gif'].includes(ext)) {
        openWindow(file.name.split('/').pop(), null, `<div style="background:#111;height:100%;display:flex;align-items:center;justify-content:center;"><img src="${file.content}" style="max-width:100%;max-height:100%;"></div>`);
    }
    // 4. VIDEOS
    else if(['mp4', 'webm'].includes(ext)) {
        openWindow(file.name.split('/').pop(), null, `<div style="background:#000;height:100%;display:flex;align-items:center;justify-content:center;"><video src="${file.content}" controls autoplay style="width:100%;height:100%;outline:none;"></video></div>`);
    }
    // 5. AUDIO
    else if(['mp3', 'wav'].includes(ext)) {
        openWindow(file.name.split('/').pop(), null, `<div style="background:#111;height:100%;display:flex;align-items:center;justify-content:center; flex-direction:column; gap:20px;"><h2>📝 ${file.name.split('/').pop()}</h2><audio src="${file.content}" controls autoplay style="width:80%;outline:none;"></audio></div>`);
    }
    // 6. UNKNOWN
    else {
        window.osAlert('Error', 'Filetype not supported or unrecognized executable.');
    }
}
// --------------------------------------------------------
// ACTION CENTER & MENUS
// --------------------------------------------------------
function toggleActionCenter() { document.getElementById('action-center').classList.toggle('hidden'); }

function toggleTheme() {
    const light = document.body.classList.toggle('light-mode');
    document.documentElement.style.setProperty('--accent', light ? '#005A9E' : '#0078D4');
}

function adjustVolume(amt) { 
    volumeLevel += amt; if(volumeLevel > 100) volumeLevel = 100; if(volumeLevel < 0) volumeLevel = 0;
    document.getElementById('vol-level').innerText = volumeLevel + '%';
}

function setWallpaper() {
    const url = document.getElementById('wallpaper-input').value;
    if (url) { document.body.style.backgroundImage = `url('${url}')`; localStorage.setItem('wallpaper', url); showNotification('Personalization', 'Wallpaper updated successfully.'); }
    document.getElementById('personalize-dialog').classList.add('hidden');
}

let ctxTarget = null;
function showContextMenu(e, type, data) {
    e.preventDefault(); e.stopPropagation(); ctxTarget = { type, data };
    const menu = document.getElementById('context-menu');
    menu.style.left = e.clientX + 'px'; menu.style.top = e.clientY + 'px'; menu.classList.remove('hidden');

    document.getElementById('ctx-open').style.display = type === 'desktop' ? 'none' : 'block';
    document.getElementById('ctx-delete').style.display = (type === 'desktop' || (type === 'app' && data.preinstalled)) ? 'none' : 'block';
    document.getElementById('ctx-download').style.display = type === 'file' ? 'block' : 'none';
    document.getElementById('ctx-personalize').style.display = type === 'desktop' ? 'block' : 'none';
    document.getElementById('ctx-new-text').style.display = type === 'desktop' ? 'block' : 'none';
    document.getElementById('ctx-new-folder').style.display = type === 'desktop' ? 'block' : 'none';
}

function hideContextMenu() { document.getElementById('context-menu').classList.add('hidden'); }

document.getElementById('ctx-open').onclick = () => { if(ctxTarget.type === 'app') openWindow(ctxTarget.data, ctxTarget.data.path); if(ctxTarget.type === 'file') openFile(ctxTarget.data); };
document.getElementById('ctx-delete').onclick = async () => {
    if(ctxTarget.type === 'app' && !ctxTarget.data.preinstalled) {
        installedApps = installedApps.filter(id => id !== ctxTarget.data.id); localStorage.setItem('installedApps', JSON.stringify(installedApps));
        renderDesktop(); renderAppStore(); renderTaskbar();
    } else if (ctxTarget.type === 'file') { 
        let del = await window.osConfirm("Delete File", "Are you sure you want to delete this file?");
        if(del) VFS.deleteFile(ctxTarget.data.name); 
    }
};
document.getElementById('ctx-download').onclick = () => {
    if(ctxTarget.type === 'file') {
        const isDataURL = ctxTarget.data.content.startsWith('data:');
        let url = isDataURL ? ctxTarget.data.content : URL.createObjectURL(new Blob([ctxTarget.data.content]));
        let a = document.createElement('a'); a.href = url; a.download = ctxTarget.data.name.split('/').pop(); a.click();
    }
};
document.getElementById('ctx-personalize').onclick = () => { document.getElementById('personalize-dialog').classList.remove('hidden'); document.getElementById('wallpaper-input').focus(); };

document.getElementById('ctx-new-text').onclick = async () => {
    let name = await window.osPrompt("New File", "Enter filename (.txt):");
    if(name) { await VFS.saveFile(name, 'text/plain', 'New Text Document'); renderDesktop(); showNotification('Created', name + ' created on desktop.'); }
};

document.getElementById('ctx-new-folder').onclick = async () => {
    let name = await window.osPrompt("New Folder", "Enter folder name:");
    if(name) { await VFS.saveFile(name, 'folder', ''); renderDesktop(); showNotification('Created', name + ' created.'); }
};

// Failsafe: Force text boxes to populate immediately just in case
const savedUrl = localStorage.getItem('chat_backend_url');
const savedEmail = localStorage.getItem('os_email');
if (savedUrl) document.getElementById('backend-url').value = savedUrl;
if (savedEmail) document.getElementById('login-email').value = savedEmail;
