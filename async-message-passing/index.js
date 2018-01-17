const electron = require("electron");

const { ipcMain, app, BrowserWindow } = electron;

app.on("ready", () => {

  const mainWindow = new BrowserWindow({width: 1024, height: 768});
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  mainWindow.openDevTools();

});
