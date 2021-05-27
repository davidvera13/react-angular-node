import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from "../../providers/auth.provider";

const GuestRoutes =  ({children, ...rest}) => {
    const authService = useAuth();
    const onlyChildComponent = React.Children.only(children);
    return (
        <Route {...rest} render={(props) => !authService.isAuthenticated() ?
            React.cloneElement(onlyChildComponent, {...rest, ...props}) :
            <Redirect to={{pathname: '/login'}} />  } />
    )
}

export default GuestRoutes;
