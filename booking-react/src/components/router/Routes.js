import {Route, Switch} from "react-router-dom";
import RentalHome from "../pages/home-component/RentalHome";
import Login from "../pages/auth-component/Login";
import Register from "../pages/auth-component/Register";
import RentalDetails from "../pages/rentaldetails-component/RentalDetails";
import SecretPage from "../pages/secretPage";
import React from "react";

const Routes = () => {
    return(
        <div className="container booking-container">
            <Switch>
                <Route exact path= '/'>
                    <RentalHome />
                </Route>
                <Route path = '/rentals/:id'>
                    <RentalDetails />
                </Route>
                <Route path = '/login'>
                    <Login />
                </Route>
                <Route path = '/register'>
                    <Register />
                </Route>
                <Route path = '/secret'>
                    <SecretPage />
                </Route>
            </Switch>
        </div>
    )
}
export default Routes;
