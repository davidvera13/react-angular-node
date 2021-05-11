const User = require('../models/user.model')
const jwt = require('jsonwebtoken');
require('dotenv').config()


exports.login = (req, res) => {
    const { email, password } = req.body;
    if(!password || !email ) {
        return res.status(422).send(
            {
                error: "missing data",
                details: "Email, password or username are missing"
            });
    }

    User.findOne({email}, (error, existingUser) => {
        if (error) {
            return res.status(422).send(
                {
                    errors: [
                        {
                            title: 'DB Error',
                            detail: 'Oooops, something went wrong!'
                        }]
                });
        }

        if(!existingUser) {
            return res.status(422).send(
                {
                    errors: [
                        {
                            title: 'Invalid email',
                            detail: 'User with provided email doesn\'t exist'
                        }]
                });
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
            return res.status(422).send(
                {
                    errors: [
                        {
                            title: 'Invalid password',
                            detail: 'Your password is incorrect'
                        }]
                });
        }
    });

    // return res.json({ message: "login ... "})
};

exports.register = (req, res) => {
    const { username, email, password, passwordConfirmation} = req.body;
    if(!password || !email || !username) {
        return res.status(422).send(
            {
                error: "missing data",
                details: "Email, password or username are missing"
            });
    }
    if(password !== passwordConfirmation) {
        return res.status(422).send(
            {
                error: "Invalid password",
                details: "Password is not matching confirmation password"
            });
    }
    User.findOne({email}, (error, existingUser) => {
        if (error) {
            return res.status(422).send(
                {
                    errors: [
                        {
                            title: 'DB Error',
                            detail: 'Oooops, something went wrong!'
                        }]
                });
        }

        if (existingUser) {
            return res.status(422)
                .send(
                    {
                        errors: [
                            {
                                title: 'Invalid Email',
                                detail: 'User with provided email already exists!'
                            }]

                });
        }

        const user = new User({username, email, password});
        user.save((error) => {
            if (error) {
                console.log(error.message);
                console.log(error.stack);
                return res.status(422).send({errors: [{title: 'DB Error', detail: 'Oooops, something went wrong!'}]});
            }
            return res.json({status: 'registered'});
        });
    });

};
