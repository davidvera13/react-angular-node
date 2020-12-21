import React from 'react';
import Header from "./shared/header-component/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./router/Routes";
import {StateContext} from '../state-context'
import store from "../store";

const App = () => {
    return (
        <div>
            <StateContext.Provider value={store} >
                <Router>
                    <Header />
                    <Routes />
                </Router>
            </StateContext.Provider>
        </div>
    )
}

export default App;