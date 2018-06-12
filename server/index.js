require('dotenv').config();
const express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive') 
    , session = require('express-session')
    , ctrl = require('../server/controller');
    
const app = express();
app.use( bodyParser.json() );

// make cart part of sessions
// 

const { 
    SERVER_PORT,
    CONNECTION_STRING
} = process.env

app.get('/api/events', ctrl.read)


massive(CONNECTION_STRING)
  .then(dbInstance => {
    console.log("database is connected");
    app.set("db", dbInstance);
  })
  .catch(err => {
    app.set("db", dbInstance);
    console.log(err);
});

// db.'name of table'.insert(req.body.cart).then
// manipulate array of items sent from front end



app.listen(SERVER_PORT, () => {
    console.log(`Listening on port:`, SERVER_PORT)
});