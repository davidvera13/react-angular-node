const Rental = require('../models/rental.model')


exports.getRentals = (req, res) => {
    Rental.find({}, (error, rentals) => {
        if (error) {
            return res.status(422).send(
                { errors: [
                    {
                        title: 'Rental Error',
                        message: 'Cannot retrieve rental data'
                    }]
                });
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
            return res.status(422).send(
                { errors: [
                    {
                        title: 'Rental Error',
                        message: 'Cannot retrieve rental data'
                    }]
                });
        } else {
            return res.json(rental)
        }

    })
};

exports.createRental = (req, res) => {
    // we expect a payload
    const payload = req.body;
    // create an instance based on the model or use a create function

    // first creation method
    // const rental = new Rental(payload);
    // rental.save((error, storedRental) => {
    //     if (error) {
    //         return res.status(422).send(
    //             { errors:
    //                 [
    //                     {
    //                         title: 'Rental Error',
    //                         message: 'Cannot post rental data'
    //                     }
    //                 ]
    //             });
    //     } else {
    //         return res.json({ message: `rental with id ${storedRental._id} was added`});
    //     }
    // });

    // using model
    Rental.create(payload, (error, storedRental) => {
        if (error) {
            return res.status(422).send(
                { errors: [
                    {
                        title: 'Rental Error',
                        message: 'Cannot post rental data'
                    }]
                });
            } else {
                return res.json({ message: `rental with id ${storedRental._id} was added`});
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
