const User = require('../models/user.model')


exports.login = (req, res) => {
    // const rentalId = req.params.rentalId;
    return res.json({ message: "login ... "})
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
