// built-in FileSystem Module - Sync
const fs = require('fs');

const first = fs.readFileSync('./files/first.txt','utf-8');
const second = fs.readFileSync('./files/second.txt','utf-8');

console.log(first, second);

fs.writeFileSync('./files/result-sync.txt','Hello World',{flag: 'a'});// con flag :'a' il sistema fa append text