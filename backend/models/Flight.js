const mongoose = require('mongoose')

const FlightSchema = new mongoose.Schema({
	

	flight_number: {type: String},
    plane_type: {type: String},
    from: {type: String},
    to: {type: String},
    date: {type: String},
    start_time: {type: String},
    end_time: {type: String},
    seats_booked: [{type: String}],
    price: {type: Number},

}, 
{ collection: 'Flights'}
)

const model = mongoose.model('FlightModel', FlightSchema)

module.exports = model


