const { app, BrowserWindow } = require("electron");
const path = require('path')
let mainWindow = null
app.on('ready', () => {
    mainWindow = new BrowserWindow({
        height: 600,
        width: 1000,
        webPreferences: {
            nodeIntegration: true //para integrarse a modulos de nodejs 
        }
        
    })
    mainWindow.loadURL('http://localhost:5000');
    // evento cuando se cierra la ventana
})

app.on('window-all-closed', () => {
        app.quit()
  })