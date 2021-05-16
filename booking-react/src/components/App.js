import React, { useEffect } from 'react';

import { BrowserRouter as Router } from "react-router-dom";
import { initStore } from "../store";
import Header from "./shared/header-component/Header";
import Routes from "./router/Routes";
import { Provider } from 'react-redux';
import { AuthProvider, useAuth } from "../providers/auth.provider";

const store = initStore();
const Providers = ({ children }) =>
    <Provider store={store}>
        <AuthProvider>
            {children}
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
            <BookingApp />
        </Providers>
    )
}

export default App;
