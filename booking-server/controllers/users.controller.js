const User = require('../models/user.model')
const jwt = require('jsonwebtoken');
require('dotenv').config()


exports.login = (req, res) => {
    const { email, password } = req.body;
    if(!password || !email ) {
        // return res.status(422).send({error: "missing data", details: "Email, password or username are missing"});
        return res.apiError({ title: "missing data", details: "Email, password or username are missing"})

    }

    User.findOne({email}, (error, existingUser) => {
        if (error) {
            // return res.status(422).send({errors: [{title: 'DB Error', detail: 'Oooops, something went wrong!'}]});
            return res.mongoError(error);
        }

        if(!existingUser) {
            // return res.status(422).send({errors: [{title: 'Invalid email', detail: 'User with provided email doesn\'t exist'}]});
            return res.apiError({ title: "Invalid email", details: "User with provided email doesn't exist"})
        }

        // compare passwords
        if(existingUser.hasSamePassword(password)) {
            // generate jwt token
            const token = jwt.sign({
                sub: existingUser.id,
                username: existingUser.username,
                email: existingUser.email
            }, process.env.JWT_SECRET, { expiresIn: '2h'})

            return res.json({ token: token })
        } else {
            // return res.status(422).send({errors: [{title: 'Invalid password', detail: 'Your password is incorrect'}]});
            return res.apiError({ title: 'Invalid password', details: 'Your password is incorrect'});
        }
    });

    // return res.json({ message: "login ... "})
};

exports.register = (req, res) => {
    const { username, email, password, passwordConfirmation} = req.body;

    // fix password not matching
    if (password !== passwordConfirmation) {
        return res.apiError({ title: 'Invalid password', details: 'Password is not maching confirmation password!'});
    }
    if (!password || !email) {
        return res.apiError({ title: 'Missing Data', details: 'Email or password is missing!'});
    }

    User.findOne({email}, (error, existingUser) => {
        if (error) {
            // return res.status(422).send( { errors: [ { title: 'DB Error',  detail: 'Oooops, something went wrong!'}]});
            return res.mongoError(error);
        }

        if (existingUser) {
            // return res.status(422).send({ errors: [ { title: 'Invalid Email', detail: 'User with provided email already exists!' }]});
            return res.apiError({ title: 'Invalid Email', details: 'User with provided email already exists!' })
        }

        const user = new User({username, email, password});
        user.save((error) => {
            if (error) {
                console.log(error.message);
                console.log(error.stack);
                // return res.status(422).send({errors: [{title: 'DB Error', detail: 'Oooops, something went wrong!'}]});
                return res.mongoError(error);
            }
            return res.json({status: 'registered'});
        }).then();
    });

};

exports.secret = (req, res) => {
    return res.json({message: 'Custom message for authorized users'})
}

// authenticated middleware (only auth user)
exports.isUserAuthenticatedMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        // parsing token
        const decodedToken = parseToken(token);
        if(!decodedToken) { return notAuthorized(res); }
        User.findById(decodedToken.sub, (err, existingUser) => {
            if (err) {
                return res.mongoError(err)
                // return res.status(422).send( { errors: [ { title: 'DB Error', detail: 'Oooops, something went wrong!' }] });
            }
            if(existingUser) {
                res.locals.user = existingUser;
                next();
            } else {
                return notAuthorized(res);
            }
        })

    } else {
        return notAuthorized(res);
    }
}

function notAuthorized(res) {
    // return res.status(401).send( { errors: [ { title: 'Not authorized',  detail: 'This resource is available to logged in users only' }] });
    return res.apiError({ status: 401, title: 'Not authorized',  detail: 'This resource is available to logged in users only' });
}

function parseToken(token) {
    try {
        return  jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
    } catch (error) {
        return null;
    }
}
