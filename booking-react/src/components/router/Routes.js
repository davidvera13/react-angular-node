import React from "react";
import {Route, Switch} from "react-router-dom";
import RentalHome from "../pages/home-component/RentalHome";
import Login from "../pages/auth-component/Login";
import Register from "../pages/auth-component/Register";
import RentalDetails from "../pages/rentaldetails-component/RentalDetails";
import SecretPage from "../pages/secretPage";
import AuthRoutes from "./AuthRoutes";
import GuestRoutes from "./GuestRoutes";
import RentalNew from "../pages/rentalnew-component/rentalNew";

const Routes = () => {
    return(
        <div className="container booking-container">
            <Switch>
                <Route exact path= '/'>
                    <RentalHome />
                </Route>
                <AuthRoutes path="/rentals/new">
                    <RentalNew />
                </AuthRoutes>
                <Route path = '/rentals/:id'>
                    <RentalDetails />
                </Route>
                <GuestRoutes path = '/login'>
                    <Login />
                </GuestRoutes>
                <GuestRoutes path = '/register'>
                    <Register />
                </GuestRoutes>
                <AuthRoutes path = '/secret'>
                    <SecretPage />
                </AuthRoutes>
            </Switch>
        </div>
    )
}
export default Routes;
