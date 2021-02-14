import React from 'react';

import { BrowserRouter as Router } from "react-router-dom";
import { initStore } from "../store";
import Header from "./shared/header-component/Header";
import Routes from "./router/Routes";
import { Provider } from 'react-redux';

const store = initStore();
const App = () => {

    return (
        <Provider store={store}>
            <Router>
                <Header />
                <Routes />
            </Router>
        </Provider>
    )
}

export default App;
