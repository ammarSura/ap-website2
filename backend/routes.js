// imports

const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const PORT = 4000;


// connect to server

mongoose.connect('mongodb+srv://asura:asdfg@cluster0.udjat.mongodb.net/Database?retryWrites=true&w=majority',
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
},

() => {
  console.log("Users Database (MongoDB) is now connected to Port:", PORT);
});

app.use('/', express.static(path.resolve(__dirname)));

app.use(bodyParser.json());


// Server up

app.listen(PORT, '127.0.0.1', () => {
	console.log('Listening');
});