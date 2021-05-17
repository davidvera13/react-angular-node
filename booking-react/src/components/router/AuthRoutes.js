import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from "../../providers/auth.provider";

const AuthRoutes =  ({children, ...rest}) => {
    const authService = useAuth();
    const onlyChildComponent = React.Children.only(children);
    return (
        <Route {...rest} render={(props) => authService.isAuthenticated() ?
            React.cloneElement(children, {...rest, ...props}) :
            <Redirect to={{pathname: '/login'}} />  } />
    )
}

export default AuthRoutes;
