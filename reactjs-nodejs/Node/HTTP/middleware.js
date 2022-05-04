const express = require('express')
const app = express()

// req => middleware => res

// meglio mettere logger in un modulo a parte
const logger = (req, res, next) => {// la chiamata get passa in automatico i parametri
    console.log('logger fnc')
    next();// devo sempre mandare indietro una risposta
}

app.use(logger);// passo il middleware che verrà eseguito in automatico per tutte le chiamate
// l'ordine è importante, se metto app.use in fondo verrà eseguita per tutte le chiamate che si trovano dopo

// app.use('/api', logger);// applica a tutte le chiamate che iniziano con /api

// app.use([logger1, logger2]) -> i middleware vengono eseguiti in ordine
// posso usare i middleware per controllare che l'utente sia autorizzato a fare certe chiamate
// come response metto res.status(401) se l'utente non è autorizzato, altirmento vado avanti con next()

app.get('/', logger, (req, res) => {

    res.send('Home')
});

app.get('/about', (req, res) => {
    res.send('About')
});

app.listen(5000, () => {
    console.log('listening')
});