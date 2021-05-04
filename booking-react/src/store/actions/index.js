// import { rentalsData } from '../data'
// import axios from 'axios';


// we define the type and associate payload
export const fetchRentals = (rentals) => {
     // axios.get('http://localhost:3001/api/v1/rentals')
     //    .then(res => {
     //        const rentals = res.data;
     //        // console.log(rentals);
     //        return rentals;
     //    });
    return {
        type: 'FETCH_RENTALS',
        rentals: rentals
    }
}

export const fetchRentalById = (rentalId) => {
    // find method iterate through array of object we return the object which responds to the test
    // const rental = rentalsData.find((rental) => {
    //     if (rental._id === parseInt(rentalId)) {
    //         return rental;
    //     }
    // });

    //
    // const rental = rentalsData.find((rental) => (rental._id === parseInt(rentalId)));
    //
    // return {
    //     type: 'FETCH_RENTAL_BY_ID',
    //     rental
    // }
}

export const createRental = rental => {
    return {
        type: 'CREATE_RENTAL',
        rental
    }
}


