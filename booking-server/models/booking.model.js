const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    // _id: will be provided automatically
    // FK reference to User schema
    startAt: {
        type: Date,
        required: 'Starting date is required'
    },
    endAt: {
        type: Date,
        required: 'Ending date is required'
    },
    price: {
        type: Number,
        required: true
    },
    nights: {
        type: Number,
        required: true
    },
    guests: {
        type: Number,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    rental: {
        type: Schema.Types.ObjectId,
        ref: 'Rental',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },

})


// using static call
bookingSchema.statics.sendError = function(res, config) {
    const { status, detail } = config;
    return res
        .status(status)
        .send({errors: [{title: 'Rental Error!', detail}]})
}

module.exports = mongoose.model('Booking', bookingSchema)
