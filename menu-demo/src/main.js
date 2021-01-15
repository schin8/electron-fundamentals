const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

app.on('ready', _ => {
    //console.log("ready")
    new BrowserWindow()
})