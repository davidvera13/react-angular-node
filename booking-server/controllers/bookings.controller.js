const Booking = require('../models/booking.model')
const moment = require('moment');

exports.createBooking = (req, res) => {
    const bookingData = req.body;
    const booking = new Booking({...bookingData, user: res.locals.user});
    // booking.user = res.locals.user;

    if(!isBookingDatesValid(booking)) {
        return res.apiError({
            title: "Invalid booking dates",
            details: "Start date and End dates error"
        });

    }
    Booking.find({ rental: booking.rental }, (error, rentalBookings) => {
        if(error) {
            return res.mongoError(error);
        }
        // is booking valid ?
        const isValid = isBookingValid(booking, rentalBookings)
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
            // return res.json({message: 'Booking is not created!'});
            return res.apiError({
                title: "Invalid booking",
                details: "Choosen dates are already taken"
            });
        }
    });
};

// TODO: provide implementation
function isBookingValid(pendingBooking, rentalBookings) {
    let isValid = true;
    if(rentalBookings && rentalBookings.length > 0) {
        // foreach
        isValid = rentalBookings.every(booking => {
            const pendingBookingStart = moment(pendingBooking.startAt);
            const pendingBookingEnd = moment(pendingBooking.endAt);

            const bookingStart = moment(booking.startAt);
            const bookingEnd = moment(booking.endAt);

            return (
                ((bookingStart < pendingBookingStart)  && (bookingEnd < pendingBookingStart)) ||
                ((pendingBookingEnd < bookingEnd)  && (pendingBookingEnd < bookingStart))
            );
        })
    }
    return isValid;
}

function isBookingDatesValid(booking) {
    let isValid = true;
    if(!booking.startAt || !booking.endAt) {
        isValid = false;
    }
    if(moment(booking.startAt).isAfter(moment(booking.endAt))) {
        isValid = false;
    }

    return isValid
}
