import express from 'express'
import cors from 'cors'
import restaurants from './api/restaurants.route.js'

const app = express();

app.use(cors());// usa cors
app.use(express.json());// converte tutti i req body in json

app.use('/api/v1/restaurants', restaurants);//tutte le chiamate che hanno api/v1/restaurants vengono gestite dentro il file restaurants

app.use('*', (req, res) => {// tutte le chiamateche non vengono gestite dalle altre api vanno qui come errore 404
    res.status(404).json({error: 'not found'});
});

export default app;