const express = require('express');
const app = express();

const data = [{id: 1, name: 'alice'}, {id: 2, name: 'bob'}, {id: 3, name: 'cynthia'}];

app.get('/', (req, res) => {

    // posso usare le array functions di JS per lavorare sui dati prima di inviarli

    res.json(data);
});

app.get('/api/users/:userID', (req, res) => {// :userID -> route parameter della richiesta

    // console.log(req.params);
    const {userID} = req.params;

    const filteredData = data.filter(u => u.id === Number(userID));// uso Number perchè i parametri vengono sempre trasformati in stringhe

    if (filteredData.length === 0) {
        return res.json('not found')
    }

    res.json(filteredData);

});

// query parameters
app.get('/api/query', (req, res) => {

    // console.log(req.query);
    const {search, limit} = req.query;// ottengo un json con i parametri dell'url

    let sortedUsers = [...data];

    if (search) {
        sortedUsers = sortedUsers.filter(u => u.name.includes(search));
    }

    if (limit) {
        sortedUsers = sortedUsers.slice(0, Number(limit))
    }

    res.status(200);
    res.json(sortedUsers);

});

app.listen(5000, () => {
    console.log('listening')
});