const { app, BrowserWindow, ipcMain } = require('electron');
const connectVPN = require('./src/func/connect');
const desconnectVPN = require('./src/func/desconnect');



//OPEN
const createWindow = ()=>{
    const win = new BrowserWindow({
        width: 350,
        height: 600,
        autoHideMenuBar: true,
        transparent: true,
        icon: './src/img/favicon.ico',
        webPreferences:{
            nodeIntegration: true,
            contextIsolation: false
        }

    })
    win.loadFile('./src/view/index.html')
}
//END
app.whenReady().then(createWindow);

//CLOSE
app.on("window-all-closed", function(){
    if(process.platform !== "darwin"){
        app.quit(console.log('Application closed.'));
    }
});




//FUNCS
ipcMain.on('connect', function(event, username, password){
    connectVPN(event, username, password);
})

ipcMain.on('desconnect', function(event){
    desconnectVPN(event);
})


