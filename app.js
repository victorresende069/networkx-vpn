const { app, BrowserWindow, ipcMain } = require('electron');
const connectVPN = require('./src/func/connect');
const desconnectVPN = require('./src/func/desconnect');
const createVPN = require('./src/func/create');
const deleteVPN = require('./src/func/delete');

createVPN('host/ip');

//OPEN
const createWindow = ()=>{
    const win = new BrowserWindow({
        width: 350,
        height: 500,
        resizable: false,
        autoHideMenuBar: true,
        icon: __dirname+'/src/img/favicon.ico',
        webPreferences:{
            nodeIntegration: true,
            contextIsolation: false
        }

    })
    win.loadFile(__dirname+'/src/view/index.html')
}
//END
app.whenReady().then(createWindow);

//CLOSE
app.on("window-all-closed", function(){
    if(process.platform !== "darwin"){
        deleteVPN();
        desconnectVPN();
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


