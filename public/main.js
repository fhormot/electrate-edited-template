import { app} from 'electron';
import path from 'path';
import url from 'url';
import 'babel-polyfill';

import MainWindow from './main-window';

let mainWindow;

const urlPath = url.format({
  pathname: path.join(__dirname, 'index.html'),
  protocol: 'file:',
  slashes: true
});

const createWindow = () => {

  mainWindow = new MainWindow(urlPath);
};

app.on('ready', () => {
  createWindow();
});

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