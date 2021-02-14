import { rentalsData } from '../data'

debugger;

// we define the type and associate payload
export const fetchRentals = () => {
    return {
        type: 'FETCH_RENTALS',
        rentals: rentalsData
    }
}

export const fetchRentalById = (rentalId) => {
    // find method iterate through array of object we return the object which responds to the test
    // const rental = rentalsData.find((rental) => {
    //     if (rental._id === parseInt(rentalId)) {
    //         return rental;
    //     }
    // });

    const rental = rentalsData.find((rental) => (rental._id === parseInt(rentalId)));

    return {
        type: 'FETCH_RENTAL_BY_ID',
        rental
    }
}

export const createRental = rental => {
    return {
        type: 'CREATE_RENTAL',
        rental
    }
}


