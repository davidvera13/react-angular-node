import React from 'react';
import Header from "./shared/header-component/Header";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Routes from "./router/Routes";

const App = (props) => {

    return (
        <div>
            <Router>
                <Header />
                <Routes />
            </Router>

        </div>
    )
}

export default App;