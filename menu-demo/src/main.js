const { Accelerator } = require("electron")
const electron = require("electron")
const app = electron.app
const BrowserWindow = electron.BrowserWindow

// Feature - Menu
const Menu = electron.Menu

app.on("ready", (_) => {
  new BrowserWindow({
  })

  const name = electron.app.getName()

  const template = [
    {
      // retrieves from package.json productName (visible when packaged)
      label: name,
      submenu: [
        {
          label: `About ${name}`,
          click: _ => {
            console.log("clicked")
          },
          role: 'about'
        },
        {
          type: "separator",
        },
        {
          label: "Quit",
          click: _ => {
            app.quit()            
          },
          accelerator: 'Cmd+Q'
        },
      ],
    },
  ]

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
})
