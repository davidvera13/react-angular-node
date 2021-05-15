import React from 'react';

import { BrowserRouter as Router } from "react-router-dom";
import { initStore } from "../store";
import Header from "./shared/header-component/Header";
import Routes from "./router/Routes";
import { Provider } from 'react-redux';
import { AuthProvider } from "../providers/auth.provider";

const store = initStore();
const App = () => {

    return (
        <Provider store={store}>
            <AuthProvider>
                <Router>
                    <Header />
                    <Routes />
                </Router>
            </AuthProvider>
        </Provider>
    )
}

export default App;
