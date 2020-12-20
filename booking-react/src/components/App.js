import React from 'react';
import Header from "./shared/header-component/Header";
import RentalHome from "./pages/home-component/RentalHome";

const App = (props) => {
    return (
        <div>
            <Header />
            <RentalHome />
        </div>
    )
}

export default App;