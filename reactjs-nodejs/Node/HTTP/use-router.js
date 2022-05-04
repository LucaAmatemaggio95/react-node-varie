const express = require('express');
const app = express();
const cors = require('cors');

const people = require('./routers')

app.use(cors());
app.options('*', cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/people', people);// le chiamate che iniziano con /api/people vengono gestite nel router a parte


app.listen(5000, () => {
    console.log('listening')
});