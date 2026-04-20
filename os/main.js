let installedApps = [];

fetch('apps.json')
  .then(res => res.json())
  .then(data => {
    data.sections.forEach(section => {
      section.apps.forEach(app => {
        if (app.preinstalled) installedApps.push(app);
      });
    });
    renderDesktop();
  });

function renderDesktop() {
  const desktop = document.getElementById("desktop");
  desktop.innerHTML = "";
  installedApps.forEach(app => {
    const div = document.createElement("div");
    div.className = "icon";
    div.innerHTML = `<img src="${app.icon}"><br>${app.title}`;
    div.onclick = () => openApp(app);
    desktop.appendChild(div);
  });
}

function openApp(app) {
  const win = document.createElement("div");
  win.className = "window";
  win.innerHTML = `
    <div class="titlebar">
      <span>${app.title}</span>
      <button onclick="this.closest('.window').remove()">X</button>
    </div>
    <iframe src="${app.src}"></iframe>
  `;
  document.body.appendChild(win);
}
