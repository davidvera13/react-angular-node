const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rentalSchema = new Schema({
    // _id: will be provided automatically
    title: {
        type: String,
        required: true,
        maxlength: [128, 'Invalid length. Max is 128 chars']
    },
    city: {
        type: String,
        required: true,
        lowercase: true
    },
    street: {
        type: String,
        required: true,
        minlength: [4, 'Invalid length. Min length is is 4 chars']
    },
    category: {
        type: String,
        required: true,
        lowercase: true
    },
    image: {
        type: String,
        required: true,
    },
    numOfRooms: Number,
    description: {
        type: String,
        required: true,

    },
    dailyPrice: {
        type: Number,
        required: true,

    },
    shared: Boolean,
    createdAt: {
        type: Date,
        default: Date.now
    },
})


module.exports = mongoose.model('Rental', rentalSchema)
