import axiosService from '../../services/AxiosService';
// import {extractApiErrors} from "./index";
const { bookingAxios } = axiosService;

// we define the type and associate payload
export const fetchRentals = (location) => async dispatch  => {
    const query = location ? `/rentals?city=${location}` : '/rentals';
    dispatch({type: 'REQUEST_DATA', resource: 'rentals'});

    const res = await bookingAxios.get(query);
    dispatch({type: 'REQUEST_DATA_COMPLETE', resource: 'rentals'});

    dispatch({
        type: 'FETCH_RENTALS',
        rentals: res.data
    })
}

export const fetchRentalById = (rentalId) => async dispatch => {
    dispatch({type: 'REQUEST_DATA', resource: 'rental'});
    const res = await bookingAxios.get(`/rentals/${rentalId}`)
    dispatch({type: 'REQUEST_DATA_COMPLETE', resource: 'rental'});

    dispatch({
        type: 'FETCH_RENTAL_BY_ID',
        rental: res.data
    });
}

export const createRental = rental => {
    debugger;
    return bookingAxios.post('/rentals', rental)
}

