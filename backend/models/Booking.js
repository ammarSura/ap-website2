const mongoose = require('mongoose')

const BookingSchema = new mongoose.Schema({
	

	passengers: [
        {
        first_name: {type: String},
        last_name: {type: String},
        seat: {type: String},
        checkedIn: {type: Boolean},
        addOns: [{type: String}],
        }
    ],

    pnr: {type: String},
    email: {type: String}

}, 
{ collection: 'Bookings'}
);

const model = mongoose.model('BookingModel', BookingSchema);

module.exports = model;


