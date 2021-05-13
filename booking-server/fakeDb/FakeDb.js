const {rentals, users} = require('./data/index.data');
const Rental = require('../models/rental.model');
const User = require('../models/user.model')

class FakeDb {
    async clean() {
        await Rental.deleteMany({});
        await User.deleteMany({});

    }
    async addData() {
        await Rental.create(rentals);
        await User.create(users);
    }
    async populate() {
        await this.clean();
        await this.addData();
    }
}

module.exports = FakeDb;
