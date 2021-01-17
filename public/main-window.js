import { BrowserWindow } from 'electron';

class MainWindow extends BrowserWindow {
    constructor(url) {
        super({
            width: 800,
            height: 600,
            webPreferences: {
                nodeIntegration: true
            }
        });

        this.loadURL(url);
    }
}

module.exports = MainWindow;