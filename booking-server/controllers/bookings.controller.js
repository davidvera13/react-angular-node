const Booking = require('../models/booking.model')

exports.createBooking = (req, res) => {
    const bookingData = req.body;
    const booking = new Booking({...bookingData, user: res.locals.user});
    // booking.user = res.locals.user;

    Booking.find({ rental: booking.rental }, (error, rentalBookings) => {
        if(error) {
            return res.mongoError(error);
        }
        // is booking valid ?
        const isValid = isBookingValid(booking)
        if(isValid) {
            booking.save((error, storedBooking) => {
                if(error) {
                    return res.mongoError(error);
                }
                return res.json({
                    message: 'Booking is created!',
                    startAt: storedBooking.startAt,
                    endAt: storedBooking.endAt
                });
            })
        } else {
            return res.json({message: 'Booking is not created!'});
        }
    });
};

// TODO: provide implementation
function isBookingValid(booking) {
    return true;
}
