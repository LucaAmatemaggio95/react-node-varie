// built-in FileSystem Module - Async
// const fs = require('fs');
const { readFile, writeFile } = require('fs');

readFile('./files/first.txt','utf8', (err, res) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(res);
    const first = res;
    readFile('./files/second.txt','utf8',(err, res) => {
        if (err) {
            console.log(err);
            return;
        }
    
        console.log(res);
        const second = res;

        writeFile('./files/result-async.txt', 'Hello world async', (err, res) => {
            if (err) {
                console.log(err);
                return;
            }
        
            console.log(res);
        });

    })
})