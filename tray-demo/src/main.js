const electron = require('electron')
const path = require('path')
const {app,Tray,Menu} = electron


app.on ('ready', _ =>{

    const tray =  new Tray(path.join('src','trayIcon.png'))

    const template = [
        {
            label: 'Wow',
            click: _ => console.log('wow')
        },
        {
            label: 'Awesome',
            click: _ => console.log('awesome')
        },
    ]


    const contextMenu = Menu.buildFromTemplate(template)
    tray.setContextMenu(contextMenu)
    tray.setTitle('My great app')
})