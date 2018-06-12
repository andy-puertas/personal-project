require('dotenv').config();
const express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive') 
    , session = require('express-session');

const app = express();

const { 
    SERVER_PORT
} = process.env


app.listen(SERVER_PORT, () => {
    console.log(`Listening on port:`, SERVER_PORT)
});