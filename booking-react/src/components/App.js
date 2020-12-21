import React from 'react';
import Header from "./shared/header-component/Header";
import RentalHome from "./pages/home-component/RentalHome";
import Register from "./pages/auth-component/Register";
import Login from "./pages/auth-component/Login";
import { Router, Route } from './router/booking-router'
const App = (props) => {

    return (
        <div>
            <Router>
                <Header />
                <Route path = '/'>
                    <RentalHome />
                </Route>
                <Route path = '/login'>
                    <Login />
                </Route>
                <Route path = '/register'>
                    <Register />
                </Route>

            </Router>

        </div>
    )
}

export default App;