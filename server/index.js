require('dotenv').config();
const express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive') 
    , session = require('express-session')
    , ctrl = require('../server/controller')
    , cors = require('cors')
    , checkUserSession = require('./middleware/checkUserSession');


const app = express();
app.use( bodyParser.json() );
app.use(cors())

// make cart part of sessions
// 

const { 
    SERVER_PORT,
    CONNECTION_STRING,
    SESSION_SECRET
} = process.env


app.use(
    session({
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: true
    })
);

app.use(checkUserSession);


app.get('/api/events', ctrl.read)
app.get('/api/events/:id', ctrl.detail)
app.get('/api/cart', ctrl.view)
app.post('/api/login', ctrl.loginUser)
app.put('/api/cart/:id', ctrl.quant)
app.post('/api/register', ctrl.registerUser)
app.post('/api/ticket', ctrl.ticket)
app.delete('/api/ticket/:id', ctrl.delete)


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