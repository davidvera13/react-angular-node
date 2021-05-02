// cli : node fakeDb/cleanDb.js
const mongoose = require('mongoose');
const FakeDb = require('./FakeDb')
require('dotenv').config()

mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, async () => {
    // callback function
    const fakeDb = new FakeDb();
    console.log('Starting populating database');
    await fakeDb.populate();
    await mongoose.connection.close();
    console.log('Database has been populated')
});
