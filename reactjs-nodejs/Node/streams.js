const {createReadStream} = require('fs');

const stream = createReadStream('./files/result-sync.txt', {highWaterMark: 900000, encoding: 'utf8'});

// default buffer size 64K
// highWaterMark -> set buffer size

stream.on('data', (chunkOfData) => {
    console.log(chunkOfData);
});

stream.on('error', err => {
    console.log(err);
});