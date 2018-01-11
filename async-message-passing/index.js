const electron = require("electron");

const { ipcMain, app, BrowserWindow } = electron;

app.on("ready", () => {

  const mainWindow = new BrowserWindow({});
  mainWindow.loadURL(`file://${__dirname}/index.html`);

  ipcMain.on('asynchronous-message', function (event, arg) {
    event.sender.send('asynchronous-reply', 'pong')
  })

});
