import React, { useEffect } from 'react';

import { BrowserRouter as Router } from "react-router-dom";
import { initStore } from "../store";
import Header from "./shared/header-component/Header";
import Routes from "./router/Routes";
import { Provider } from 'react-redux';
import { AuthProvider, useAuth } from "../providers/auth.provider";
import { MapProvider } from "../providers/map.provider";
import {ToastContainer} from "react-toastify";

const store = initStore();
const Providers = ({ children }) =>
    <Provider store={store}>
        <AuthProvider>
            <MapProvider apiKey="7ue0kJMVPHA1YzNjBc3ktsGYYkoZdgMD">
                {children}
            </MapProvider>
        </AuthProvider>
    </Provider>

const BookingApp = () => {
    const authService = useAuth();
    useEffect(() => {
        authService.checkAuthState()
    }, [authService]);

    return (
        <Router>
            <Header logout={authService.signOut} />
            <Routes />
        </Router>
    )
}
const App = () => {

    return (
        <Providers>
            <ToastContainer />
            <BookingApp />
        </Providers>
    )
}

export default App;
