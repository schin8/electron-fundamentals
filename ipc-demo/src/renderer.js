const electron = require("electron");
const ipc = electron.ipcRenderer


document.getElementById('start').addEventListener('click', _ => {
    console.log('start clicked')
    ipc.send('countdown-start')
})

// an event 'countdown' was sent by main's mainWindow.webContents.send
ipc.on('countdown-evt', (evt,count) => {
    document.getElementById('count').innerHTML = count
})
