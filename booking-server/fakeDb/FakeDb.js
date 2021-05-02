const rentals = require('./data/rentals');
const Rental = require('../models/rental.model');

class FakeDb {
    clean() {
        return Rental.deleteMany({});
    }
    addData() {
        return Rental.create(rentals)
    }
    async populate() {
        await this.clean();
        await this.addData();
    }
}

module.exports = FakeDb;
