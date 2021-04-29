const express = require('express');
const router = express.Router();


// fake data
const rentals = [
    {
        _id: 'fdsfsdfsds',
        city: 'New York',
        title: 'Very nice place'
    },
    {
        _id: 'fdsfsdfsfs',
        city: 'Berlin',
        title: 'Very nice place too'
    },
    {
        _id: 'fszfsdfsds',
        city: 'London',
        title: 'Great place'
    },
]

// requests
router.get('/', (req, res) => {
    return res.json(rentals)
});

router.get('/:rentalId', (req, res) => {
    const rental = rentals.find(rental => {
        // const rentalId = req.params.rentalId;
        const {rentalId} = req.params;
        return rental._id === rentalId;
    })
    return res.json(rental)
});

router.post('/', (req, res) => {
    // we expect a payload
    const payload = req.body;
    rentals.push(payload);
    return res.json({ message: `rental with id ${payload._id} was added`});
});

router.delete('/:rentalId', (req, res) => {
    const {rentalId} = req.params;
    const rentalIndex = rentals.findIndex(rental => rental._id === rentalId );
    // remove one element of the array based on index position
    rentals.splice(rentalIndex, 1);
    return res.json({ message: `rental with id ${rentalId} was removed`});

});

router.patch('/:rentalId', (req, res) => {
    const {rentalId} = req.params;
    const payload = req.body;
    const rentalIndex = rentals.findIndex(rental => rental._id === rentalId );

    // let's consider we just update city and title
    rentals[rentalIndex].city = payload.city;
    rentals[rentalIndex].title = payload.title;

    return res.json({ message: `rental with id ${rentalId} was updated`});
})

// export the router and make it available to index.js
module.exports = router;
