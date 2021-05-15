// import { rentalsData } from '../data'
import axios from 'axios';

export const extractApiErrors = (resError) => {
    let errors = [{title: 'Error!', detail: 'Oooops, something went wrong! '}];
    if( resError && resError.data && resError.data.errors) {
        errors = resError.data.errors;
    }
    return errors;
}

// we define the type and associate payload
export const fetchRentals = () => async dispatch  => {
    const res = await axios.get('/api/v1/rentals')
    dispatch({
        type: 'FETCH_RENTALS',
        rentals: res.data
    })
}

export const fetchRentalById = (rentalId) => async dispatch => {
    dispatch({type: 'IS_FETCHING_RENTAL'});
    const res = await axios.get(`/api/v1/rentals/${rentalId}`)
     dispatch({
         type: 'FETCH_RENTAL_BY_ID',
         rental: res.data
     });
}

export const createRental = rental => {
    return {
        type: 'CREATE_RENTAL',
        rental
    }
}

// Auth action
// register user: we don't store any state in redux
export const registerUser = (registrationData) => {
    return axios
        .post('/api/v1/users/register', registrationData)
        .catch(error => {
            return Promise.reject(extractApiErrors(error.response || {}));
        });
}


export const loginUser = (loginData) => {
    return axios
        .post('/api/v1/users/login', loginData)
        .then(res => res.data)
        .catch(error => {
            debugger;
            return Promise.reject(extractApiErrors(error.response || {}));
        });
}

