const path = require('path');
var appRoot = path.join(__dirname, '..');
console.log(appRoot)
require('electron-compile').init(appRoot, '/Users/abhinavhardikar/Projects/Electron/PhoneManager/src/main');
