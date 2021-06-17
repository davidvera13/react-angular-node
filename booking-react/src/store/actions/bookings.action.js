import axiosService from '../../services/AxiosService';
import {extractApiErrors} from "./index";
const { bookingAxios } = axiosService;

// we define the type and associate payload
export const createBooking = (booking)  => {
    return bookingAxios.post('/bookings', booking)
        .then(res => res.data)
        .catch(err => Promise.reject(extractApiErrors(err.response || {})))
}

// get the bookings for a rental
export const getBookings = (rentalId) => {
    return bookingAxios.get(`/rentals/${rentalId}/bookings`)
        .then(res => res.data)
}

