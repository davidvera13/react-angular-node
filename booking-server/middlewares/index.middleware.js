exports.provideErrorHandler = (req, res, next) => {

    res.apiError = config => {
        const { status = 422, title, details } = config;
        return res
            .status(status)
            .send({errors: [{title, details}]})
    }


    res.mongoError = dbError => {
        const normalizedErrors = [];
        const errorField = 'errors';

        if (dbError &&
            dbError.hasOwnProperty(errorField) &&
            dbError.name === 'ValidationError') {
            const errors = dbError[errorField];
            for (let property in errors) {
                normalizedErrors.push({title: property, details: errors[property].message});
            }
        } else {
            normalizedErrors.push({title: 'Db Error', details: 'Ooops, something went wrong!'});
        }
        return res.status(422).send({errors: normalizedErrors});
    }
    next();
}
