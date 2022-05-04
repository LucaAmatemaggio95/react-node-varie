npm init -> crea package.json
npm install express cors mongodb dotenv
npm install -g nodemon

aggiungo "type": "module" a package.json

creo file .env per settare le variabili di ambiente
copio la stringa di connessione da mongoDB e modifico i parametri

per usare le veriabili del file .env importo dotenv e specifico process.env.[nome_variabile]

nodemon server -> faccio partire il servizio

!!!!!
assicurarsi che l'indirizzo IP corrente sia abilitato in MongoDB -> Network Access
!!!!!

creo cartella e file DAO -> Data Access Object

inserisco in DAO le funzioni per connettersi e fare le query

index.js -> inserisco il riferimento al DB subito prima del listen

Creo il controller restaurants.controller.js
Dentro il controller setto i parametri e i filtri da passare al componente DAO

test su postman -> posso inserire tutti i parametri come querystrings -> ?zipcode=1234

per filtrare il nome vado su MDB Atlas -> create new Index -> name:text

Creo un altro controller per le reviews
----

mongodb Realm

sostituisce completamente il backend -> tutto trasferito in cloud
per le API bisogna creare dei servizi -> unpo er ogni tipo (get, post, ecc)

GET: list di tutti i ristoranti
// This function is the webhook's request handler.
exports = async function(payload, response) {
    
    const collection = context.services.get("mongodb-atlas").db("sample_restaurants").collection("restaurants");
    
    let restaurantsList = await collection.find().limit(20).toArray();
    
    return  restaurantsList;
};
-----
con MongoDB posso anche avere l'Hosting direttamente insieme alle funzioni in cloud