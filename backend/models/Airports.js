const mongoose = require('mongoose')

const AirportSchema = new mongoose.Schema({
	

	name: {type: String},
    city: {type: String},
    code: {type: String},

}, 
{ collection: 'Airports'}
);

const model = mongoose.model('AirportModel', AirportSchema);

module.exports = model;


