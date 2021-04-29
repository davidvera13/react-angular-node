/**
 * we implement express npm install express --save
 */

const express = require('express')
const bodyParser = require('body-parser')

const rentalRoutes = require('./routes/rentals.routes');
const app  = express();
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
   console.log('Server is listening on port ', PORT);
});
// middleware declaration
app.use(bodyParser.json());
app.use('/api/v1/rentals', rentalRoutes);
