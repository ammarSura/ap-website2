// imports

const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Flight = require('./models/Flight');
const Booking = require('./models/Booking');
const Airports = require('./models/Airports');
const cookieParser = require('cookie-parser');
var session = require('express-session')
// const passport = require('passport');

const PORT = 4000;



// connect to server

mongoose.connect('mongodb+srv://asura:asdfg@cluster0.udjat.mongodb.net/Flights?retryWrites=true&w=majority',
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
},

() => {
  console.log("Flights Database (MongoDB) is now connected to Port:", PORT);
});

app.use('/', express.static(path.resolve(__dirname)));

app.use(bodyParser.json());

app.get('/search/:terms', async (req, res) => {
  // from=BOM&to=HYD&dep=2022-01-23
  const params = req.params.terms;

  const from = params.substring(5, 8);
  const to = params.substring(12, 15);
  const dep = params.substring(20, )
  console.log(from, to, dep)
  const results = await Flight.find({from: from, to: to, date: dep});

  if (results.length === 0) {
    res.json("No flights found")
  } else {
    res.json(results);
  }

  
});

app.get('/getBooking/:terms', async (req, res) => {
  const params = req.params.terms;

  console.log('params');

  const result = await Booking.find({pnr: "R42341"})
  res.json(result)
});

app.post('/makeBooking', async (req, res) => {
  const details = req.body;

  
  const response = await Booking.create({ details });


	res.json({ status: 'ok' });
})

app.get('/getAirports', async (req, res) => {
  const response = await Airports.find({})

  res.json(response);
})





app.listen(PORT, '127.0.0.1', () => {
	console.log('Listening at port: ' + PORT);
});

