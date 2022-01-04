// imports

const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const PORT = 4000;


// connect to server

// mongoose.connect('mongodb+srv://asura:asdfg@cluster0.udjat.mongodb.net/Database?retryWrites=true&w=majority',
// {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// },

// () => {
//   console.log("Users Database (MongoDB) is now connected to Port:", PORT);
// });

// app.use('/', express.static(path.resolve(__dirname)));

// app.use(bodyParser.json());

app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('welcome to a simple HTTP cookie server');
});


app.get('/setcookie1', (req, res) => {
  res.cookie('Cookie 1','nice', {
    expires: new Date('01 01 2023'),
    httpOnly: true,
    sameSite: 'lax',
  });
  res.send('Cookie have been saved successfully');
});

app.get('/setcookie2', (req, res) => {
  res.cookie('Cookie 2','double nice');
  res.send('Cookie have been saved successfully');
});

app.get('/getcookie', (req, res) => {
  //show the saved cookies
  console.log(req.cookies)
  res.send(req.cookies);
});

app.get('/deletecookie', (req, res) => {
  //show the saved cookies
  res.clearCookie("Cookie 2")
  res.send('Cookie has been deleted successfully');
});

// Server up

app.listen(PORT, '127.0.0.1', () => {
	console.log('Listening at port: ' + PORT);
});

