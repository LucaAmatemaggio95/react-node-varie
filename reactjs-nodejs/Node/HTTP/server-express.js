const express = require('express');
// const path = require('path');

const app = express();

app.use(express.static('./public'));// in public inserisco tutti i file statici - svg, css, js, html -> index.html viene chiamato in automatico all'indirizzo /


// app.get('/', (req, res) => {// ogni volta che c'è una get a questo indirizzo
//     // res.send('homepage');
//     res.sendFile(path.resolve(__dirname, './index.html'));
// });

app.get('/about', (req, res) => {// ogni volta che c'è una get a questo indirizzo
    res.send('about');
});

// applica a tutte le chiamate
// se non ha tovato l'endpoint invia uno status 404
app.all('*', (req, res) => {
    res.status(404).send('page not found')
});

app.listen(5000, () => {
    console.log('server listening');
});