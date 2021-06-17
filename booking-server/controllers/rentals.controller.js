const Rental = require('../models/rental.model');
const Booking = require('../models/booking.model');

exports.getBookings = async (req, res) => {
    const { rental } = req.query;
    const query = rental ? Booking.find({rental}) : Booking.find({});

    try {
        const bookings = await query.select('startAt endAt -_id').exec();
        return res.json(bookings);
    } catch (error) {
        return res.mongoError(error);
    }
}

exports.getRentals = (req, res) => {
    Rental.find({}, (error, rentals) => {
        if (error) {
            // return Rental.sendError(res, { status: 422, detail: 'Cannot retrieve rental data' });
            return res.mongoError(error);
        } else {
            // return results
            return res.json(rentals)
        }
    })
};

exports.getRental = (req, res) => {
    // const rentalId = req.params.rentalId;
    const {rentalId} = req.params;
    Rental.findById(rentalId, (error, rental) => {
        if (error) {
            // return Rental.sendError(res, { status: 422, detail: 'Cannot retrieve rental data' })
            return res.mongoError(error);
        } else {
            return res.json(rental)
        }

    })
};

exports.createRental = (req, res) => {
    // we expect a payload
    const payload = req.body;
    // get the owner user
    const user = res.locals.user;
    payload.owner = user;

    // using model
    Rental.create(payload, (error, storedRental) => {
        if (error) {
            return res.mongoError(error);
        } else {
            // return res.json({message: `rental with id ${storedRental._id} was added`});
            return res.json(storedRental);
        }
    });
}

// exports.updateRental = (req, res) => {
//     const {rentalId} = req.params;
//     const payload = req.body;
//     const rentalIndex = rentals.findIndex(rental => rental._id === rentalId );
//
//     // let's consider we just update city and title
//     rentals[rentalIndex].city = payload.city;
//     rentals[rentalIndex].title = payload.title;
//
//     return res.json({ message: `rental with id ${rentalId} was updated`});
// };
//
// exports.deleteRental =  (req, res) => {
//     const {rentalId} = req.params;
//     const rentalIndex = rentals.findIndex(rental => rental._id === rentalId );
//     // remove one element of the array based on index position
//     rentals.splice(rentalIndex, 1);
//     return res.json({ message: `rental with id ${rentalId} was removed`});
//
// }


// middlewares
exports.isUserRentalOwnerMiddleware = (req, res, next) => {
    const {rental} = req.body;
    const user = res.locals.user;

    Rental.findById(rental)
        .populate('owner')
        .exec((error, storedRental) => {
            if (error) {
                return res.mongoError(error);
            }
            if(storedRental.owner.id === user.id) {
                return res.apiError({
                    title: "Invalid user",
                    details: 'Cannot create booking on your rental'
                })
            }
            next();

        });
}

