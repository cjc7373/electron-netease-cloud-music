'use strict';

import { app, BrowserWindow, ipcMain } from 'electron';

let mainWindow;
const winURL = process.env.NODE_ENV === 'development'
    ? `http://localhost:${require('../../../script/config').devPort}`
    : `file://${__dirname}/index.html`;

function createWindow() {
    /**
     * Initial window options
     */
    mainWindow = new BrowserWindow({
        height: 700,
        width: 1000,
        frame: false,
        titleBarStyle: 'hidden',
        name: 'Electron Netease Cloud Music',
        webPreferences: {
            blinkFeatures: 'OverlayScrollbars'
        }
    });

    mainWindow.loadURL(winURL);

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    ipcMain.on('closeMainWin', () => {
        mainWindow.close();
    });

    ipcMain.on('toggleMaximizeMainWin', () => {
        if (mainWindow.isMaximized()) mainWindow.unmaximize();
        else mainWindow.maximize();
    });

    ipcMain.on('minimizeMainWin', () => {
        mainWindow.minimize();
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});

// boot up ApiHost
require('./api/apihost');
