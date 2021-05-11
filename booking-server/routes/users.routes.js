const express = require('express');
const router = express.Router();

const {
    login,
    register
} = require('../controllers/users.controller');


// requests
router.post('/login', login);

router.post('/register', register);

// export the router and make it available to index.js
module.exports = router;
