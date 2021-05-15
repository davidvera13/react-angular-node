import React from 'react';
import {loginUser} from "../store/actions";
import jwt from 'jsonwebtoken'
import {connect} from "react-redux";

const { createContext } = React;

const AuthContext = createContext(null);

// (props)
export const AuthBaseProvider = ({ children, dispatch }) => {

    const decodeToken = token => {
        return jwt.decode(token);
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

                dispatch({
                    type: 'USER_AUTHENTICATED',
                    username: decodedToken.username
                });
                return token;
            })
    };

    const authApi = {
        signIn
    }

    return (
        <AuthContext.Provider value={authApi}>
            {children}
        </AuthContext.Provider>
    )
}

export const AuthProvider = connect()(AuthBaseProvider);

export const withAuth = Component => props => (
    <AuthContext.Consumer>
        {authApi => <Component {...props} auth={authApi} /> }
    </AuthContext.Consumer>
)
