const express = require('express');
const router = express.Router();

const {
    getRentals,
    getRental,
    createRental,
    getBookings
    // updateRental,
    // deleteRental
} = require('../controllers/rentals.controller');

const { isUserAuthenticatedMiddleware } = require('../controllers/users.controller');

// requests
router.get('/', getRentals);
router.get('/:rentalId', getRental);
router.post('/', isUserAuthenticatedMiddleware, createRental);
router.get('/:rentalId/bookings', isUserAuthenticatedMiddleware, getBookings)

// router.delete('/:rentalId', deleteRental);
//
// router.patch('/:rentalId', updateRental);

// export the router and make it available to index.js
module.exports = router;
