import { app, BrowserWindow, ipcMain } from "electron";
import "../renderer/store/index";
/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== "development") {
  global.__static = require("path")
    .join(__dirname, "/static")
    .replace(/\\/g, "\\\\");
}

let mainWindow,subWindow
const winURL =
  process.env.NODE_ENV === "development"
    ? `http://localhost:9080/#/music`
    : `file://${__dirname}/index.html`;

function createWindow() {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    width: 1050,
    height: 650,
    frame: false,
    useContentSize: true,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadURL(winURL);

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}
function createLoginWindow() {}
app.commandLine.appendSwitch("--disable-http-cache");
app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
ipcMain.on("window-close", () => {
  mainWindow.close();
});
ipcMain.on("window-cut", () => {
  mainWindow.minimize();
});
ipcMain.on("createLoginWindow", () => {
  const modalPath =
    process.env.NODE_ENV === "development"
      ? "http://localhost:9080/#/login"
      : `file://${__dirname}/index.html#login`;
  subWindow = new BrowserWindow({
    width: 320,
    height: 420,
    frame: false,
    show: false,
    resizable: false,
    modal: true,
    center: true,
    parent: mainWindow,
    useContentSize: true,
    webPreferences: { 
      webSecurity: false, 
      devTools: false 
    }
  });
  subWindow.on('ready-to-show', () => {
    subWindow.show()
  })
  subWindow.on("close", function() {
    subWindow = null;
  });
  subWindow.loadURL(modalPath);
});
ipcMain.on('closeLoginWindow',() => {
  subWindow.close()
})
