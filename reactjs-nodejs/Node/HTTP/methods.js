const express = require('express')
const app = express()
const people = require('./data');

app.use(express.urlencoded({extended: false})) // parse form data
app.use(express.json());// parse json data

app.get('/', (req, res) => {
    res.status(200).send({success: true, data: people});
});

app.get('/about', (req, res) => {
    res.send('About')
});

app.listen(5000, () => {
    console.log('listening')
});