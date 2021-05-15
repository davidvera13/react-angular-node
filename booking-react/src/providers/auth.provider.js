import React from 'react';
import {loginUser} from "../store/actions";
import jwt from 'jsonwebtoken'
import {connect} from "react-redux";

const { createContext } = React;

const AuthContext = createContext(null);

export const AuthBaseProvider = (props) => {

    const decodeToken = token => {
        const decoded = jwt.decode(token);
        console.log(decoded)
        return decoded;
    }

    const signIn = loginData => {
        debugger;
        console.log("Props: ");
        console.log(props);
        return loginUser(loginData)
            .then(({token}) => {
                localStorage.setItem('token', token);
                const decodedToken = decodeToken(token);
                console.log('decoded token: ');
                console.log(decodedToken);
                return token;
            })
    };

    const authApi = {
        signIn
    }

    return (
        <AuthContext.Provider value={authApi}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const AuthProvider = connect()(AuthBaseProvider);

export const withAuth = Component => props => (
    <AuthContext.Consumer>
        {authApi => <Component {...props} auth={authApi} /> }
    </AuthContext.Consumer>
)
