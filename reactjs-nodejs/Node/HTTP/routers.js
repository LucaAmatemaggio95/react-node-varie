const express = require('express');

const router = express.Router();

const { getPeople, getTest, postBook } = require('./controllers');

// i path di base prendono /api/people -> definito nel file principale
// da qui uso solo i path che vanno più nello specifico

router.get('/', getPeople);

router.get('/test', getTest);

router.post('/test2', postBook);

/*

router.route('/')
    .get(getPeople)
    .post(postPeople)
    
ecc. per tutte le altre route

*/

// di seguito tutte le chiamate che contengono /api/people

module.exports = router;