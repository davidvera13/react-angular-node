import axios from 'axios';
import axiosService from '../../services/AxiosService';
import {extractApiErrors} from "./index";

const { bookingAxios } = axiosService;

// Auth action
// register user: we don't store any state in redux

export const registerUser = (registrationData) => {
    return bookingAxios
        .post('/users/register', registrationData)
        .catch(error => {
            return Promise.reject(extractApiErrors(error.response || {}));
        });
}


export const loginUser = (loginData) => {
    return bookingAxios
        .post('/users/login', loginData)
        .then(res => res.data)
        .catch(error => {
            debugger;
            return Promise.reject(extractApiErrors(error.response || {}));
        });
}

export const userAuthenticated = (decodedToken) => {
    return {
        type: 'USER_AUTHENTICATED',
        username: decodedToken.username
    };
}
