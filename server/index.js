require('dotenv').config();
const express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive') 
    , session = require('express-session')
    , ctrl = require('../server/controller')
    , stripe = require('stripe')(process.env.STRIPE_SECRET)
    , cors = require('cors')
    , checkUserSession = require('./middleware/checkUserSession');


const app = express();

app.use( express.static( `${__dirname}/../build` ) );

app.use( bodyParser.json() );
app.use(cors())

// make cart part of sessions
// 

const { 
    SERVER_PORT,
    CONNECTION_STRING,
    SESSION_SECRET,
    STRIPE_PUBLISH,
    STRIPE_SECRET
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
app.put('/api/cart', ctrl.quant)
app.post('/api/register', ctrl.registerUser)
app.post('/api/ticket', ctrl.ticket)
app.post('/api/payment', (req, res, next) => {
    //convert amount to pennies
    

        const amount = req.body.total * 100
        const charge = stripe.charges.create({
            amount,
            currency: 'usd',
            source: req.body.token.id,
            description: 'event ticket'
        }, function (err, charge) {
        // if (err) return res.sendStatus(500)
        
        const db = req.app.get('db')
        //const { id } = req.params
        
        db.clear_cart([req.session.user.id])
            .then(cart => res.status(200).send(cart))
            .catch( err => 
                
                {   console.log(err)
                    res.status(500).send(err)})
        
    });
})


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