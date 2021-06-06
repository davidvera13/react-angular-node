const express = require('express')
const {isUserAuthenticatedMiddleware} = require("../controllers/users.controller");
const {isUserRentalOwnerMiddleware} = require("../controllers/rentals.controller")
const router = express.Router();

const {
    createBooking
} = require('../controllers/bookings.controller');


// requests
router.post('', isUserAuthenticatedMiddleware, isUserRentalOwnerMiddleware, createBooking);


// export the router and make it available to index.js
module.exports = router;
