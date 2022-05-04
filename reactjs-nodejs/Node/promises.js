const {readFile, writeFile} = require('fs');
// const {readFile, writeFile} = require('fs').promises;// --> mette il wrapper in automatico senza importare utils
const util = require('util');

const readFilePromise = util.promisify(readFile);// wrapper per avere la struttura Promise in automatico
const writeFilePromise = util.promisify(writeFile);// wrapper per avere la struttura Promise in automatico

// funzione con Promise manuale
const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data)
            }
        })
    })
}

const start = async() => {
    try {
        const first = await readFilePromise('./files/first.txt', 'utf8');
        const second = await readFilePromise('./files/second.txt', 'utf8');
        await writeFilePromise('./files/third.txt', 'Third');
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
}

start();

// getText('./files/first.txt')
// .then(result => console.log(result))
// .catch(err => console.log(err));
