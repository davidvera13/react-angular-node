import React from 'react';
import {loginUser, userAuthenticated} from "../store/actions";
import jwt from 'jsonwebtoken'
import moment from 'moment';
import {connect} from "react-redux";

const { createContext, useContext } = React;

const AuthContext = createContext(null);

// (props)
export const AuthBaseProvider = ({ children, dispatch }) => {

    const decodeToken = token => {
        return jwt.decode(token);
    }

    const getTokenExpiration = (decodedToken) => {
        return moment.unix(decodedToken.exp);
    }

    const checkAuthState = () => {
        const storedToken = getToken();
        const decodedToken = decodeToken(storedToken);
        // if moment().isBefore(getTokenExpiration(storedToken) token is valid
        // example: 17:29 < 18:30
        if (decodedToken && moment().isBefore(getTokenExpiration(decodedToken))) {
            dispatch(userAuthenticated(decodedToken));
        }
    }

    const isAuthenticated = () => {
        const token = getToken();
        if (!token) { return false; }
        const decodedToken = decodeToken(token);
        return decodedToken && isTokenValid(decodedToken)
    }

    const isTokenValid = (decodedToken) => {
        debugger;
        return decodeToken && moment().isBefore(getTokenExpiration(decodedToken));
    }

    const getToken = () => {
        return localStorage.getItem('token');
    }

    const signIn = loginData => {
        debugger;
        // const props = { children, dispatch };
        // console.log(props);
        return loginUser(loginData)
            .then(({token}) => {
                localStorage.setItem('token', token);
                const decodedToken = decodeToken(token);
                console.log(decodedToken);
                dispatch(userAuthenticated(decodedToken));

                return token;
            })
    };

    const signOut = () => {
        localStorage.removeItem('token');
        dispatch({ type: 'USER_DISCONNECTION'})
    }

    const authApi = {
        signIn, checkAuthState, signOut, isAuthenticated
    }

    return (
        <AuthContext.Provider value={authApi}>
            {children}
        </AuthContext.Provider>
    )
}

export const AuthProvider = connect()(AuthBaseProvider);
export const useAuth = () => {
    return useContext(AuthContext);
}

export const withAuth = Component => props => (
    <AuthContext.Consumer>
        {authApi => <Component {...props} auth={authApi} /> }
    </AuthContext.Consumer>
)
