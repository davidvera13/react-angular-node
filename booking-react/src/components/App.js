import React from 'react';
import Header from "./shared/header-component/Header";
import RentalHome from "./pages/home-component/RentalHome";
import Register from "./pages/auth-component/Register";
import Login from "./pages/auth-component/Login";

const App = (props) => {
    const renderPages = () => {
        const {pathname} = window.location
        switch(pathname) {
            case '/':
                return <RentalHome />
            case '/login':
                return <Login />
            case '/register':
                return <Register />
            default:
                return <RentalHome />
        }
    };
    return (
        <div>
            <Header />
            { renderPages() }
        </div>
    )
}

export default App;