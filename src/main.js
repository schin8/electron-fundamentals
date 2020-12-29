// Electron setup
const electron = require('electron')
const app = electron.app

//

app.on('ready', _ => {
    console.log('ready!')
})
console.log('ready!')