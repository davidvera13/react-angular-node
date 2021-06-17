import axiosService from '../../services/AxiosService';
// import {extractApiErrors} from "./index";
const { bookingAxios } = axiosService;

// we define the type and associate payload
export const fetchRentals = () => async dispatch  => {
    const res = await bookingAxios.get('/rentals')
    dispatch({
        type: 'FETCH_RENTALS',
        rentals: res.data
    })
}

export const fetchRentalById = (rentalId) => async dispatch => {
    dispatch({type: 'IS_FETCHING_RENTAL'});
    const res = await bookingAxios.get(`/rentals/${rentalId}`)
    dispatch({
        type: 'FETCH_RENTAL_BY_ID',
        rental: res.data
    });
}

export const createRental = rental => {
    debugger;
    return bookingAxios.post('/rentals', rental)
}

