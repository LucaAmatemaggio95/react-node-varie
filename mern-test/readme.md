creo cartella server e cartella client
cd client -> npx create-react-app ./

cd server -> npm init
npm install body-parser cors express mongoose nodemon

creo file index.js in server

import moduli

in package.json -> aggiungo "type": "module"
rimuovo script test
aggiungo script start : nodemon index.js

cd client -> npm install axios moment react-file-base64 redux redux-thunk

cd server -> inizializzo i pacchetti con app.express();