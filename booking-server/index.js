/**
 * we implement express npm install express --save
 */

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const { provideErrorHandler } = require('./middlewares/index.middleware');
require('dotenv').config();


// routes
const rentalRoutes = require('./routes/rentals.routes');
const usersRoutes = require('./routes/users.routes');
const bookingsRoutes = require('./routes/booking.routes');

// models
const Rental = require('./models/rental.model');
const User = require('./models/user.model');
const Booking = require('./models/booking.model');


const app  = express();
const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGO_DB, {
   serverSelectionTimeoutMS: 50000,
   useNewUrlParser: true,
   useUnifiedTopology: true,
   useFindAndModify: false,
   useCreateIndex: true
}, () => {
   // callback function
   console.log('Connected to database')
});

app.listen(PORT, () => {
   console.log('Server is listening on port ', PORT);
});
// middleware declaration
app.use(bodyParser.json());
app.use(provideErrorHandler);


app.use('/api/v1/rentals', rentalRoutes);
app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/bookings', bookingsRoutes);
