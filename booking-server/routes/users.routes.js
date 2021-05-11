const express = require('express');
const {isUserAuthenticatedMiddleware} = require("../controllers/users.controller");
const router = express.Router();

const {
    login,
    register,
    secret
} = require('../controllers/users.controller');


// requests
router.post('/login', login);

router.post('/register', register);

router.get('/secret', isUserAuthenticatedMiddleware,  secret);

// export the router and make it available to index.js
module.exports = router;
