const express = require('express')
const {isUserAuthenticatedMiddleware} = require("../controllers/users.controller");
const router = express.Router();

const {
    createBooking
} = require('../controllers/bookings.controller');


// requests
router.post('', isUserAuthenticatedMiddleware, createBooking);


// export the router and make it available to index.js
module.exports = router;
