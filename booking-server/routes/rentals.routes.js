const express = require('express');
const router = express.Router();

const {
    getRentals,
    getRental,
    createRental,
    // updateRental,
    // deleteRental
} = require('../controllers/rentals.controller');


// requests
router.get('/', getRentals);

router.get('/:rentalId',getRental);

router.post('/', createRental);

// router.delete('/:rentalId', deleteRental);
//
// router.patch('/:rentalId', updateRental);

// export the router and make it available to index.js
module.exports = router;
