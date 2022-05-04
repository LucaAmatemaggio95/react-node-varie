// built-in PATH Module
const path = require('path');

console.log(path.sep);

const filePath = path.join('content','subfolder', 'filename.txt');
console.log(filePath);

const base = path.basename(filePath);// return file name + extension
const absolute = path.resolve(__dirname, 'content','subfolder','filename.txt');// return absolute path