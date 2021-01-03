// Electron setup
const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path')

// App setup
const countdown = require("./countdown")

let mainWindow;

app.on("ready", _ => {

  mainWindow = new BrowserWindow({
    height: 400,
    width: 400,
    webPreferences: {
        nodeIntegration: true
    }
  });

  mainWindow.loadURL(`file://${__dirname}/countdown.html`)

  countdown()

  mainWindow.on("closed", (_) => {
    mainWindow = null;
    console.log("Cleanup");
  });

});
