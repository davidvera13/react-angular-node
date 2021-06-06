const Booking = require('../models/booking.model')


exports.createBooking = (req, res) => {
    const bookingData = req.body;
    return res.json({message: 'Booking is created!'});
};
