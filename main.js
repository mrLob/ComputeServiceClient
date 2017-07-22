const electron = require("electron")
const {BrowserWindow, app} = electron

function openWindow(hg = 1000,wd = 750,bord = true,modl = false,load = 'template'){
    let window = new BrowserWindow(
        {
            width: wd,
            height: hg,
            frame: bord,
            modal: modl
        }
    );
    window.loadURL('file://'+__dirname+'/app/'+load+'.html');
}

app.on('ready',openWindow);
