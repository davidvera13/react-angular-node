/* eslint-disable jsx-a11y/img-redundant-alt*/
import React from 'react';
import RentalCard from "./RentalCard";

class RentalHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rentals: [{
                _id: 1,
                title: "Nice view on ocean",
                city: "San Francisco",
                category: "condo",
                image: "http://via.placeholder.com/350x250",
                numOfRooms: 4,
                shared: true,
                description: "Very nice apartment in center of the city.",
                dailyPrice: 43
            }, {
                _id: 2,
                title: "Modern apartment in center",
                city: "New York",
                category: "apartment",
                image: "http://via.placeholder.com/350x250",
                numOfRooms: 1,
                shared: false,
                description: "Very nice apartment in center of the city.",
                dailyPrice: 11
            }, {
                _id: 3,
                title: "Old house in nature",
                city: "Bratislava",
                category: "house",
                image: "http://via.placeholder.com/350x250",
                numOfRooms: 5,
                shared: true,
                description: "Very nice apartment in center of the city.",
                dailyPrice: 23
            }]
        }
    }

    // renderRentals(rentals) {
    //     return rentals.map((rental) => {
    //         return(
    //             <div key={rental._id} className="col-md-3">
    //                 <RentalCard rental={rental} />
    //             </div>
    //         )
    //     })
    // }
    renderRentals = (rentals) =>
        rentals.map((rental) =>
            <div key={rental._id} className="col-md-3">
                <RentalCard rental={rental} />
            </div>
        )

    render() {
        const { rentals } = this.state;

        return (
            <div className="card-list">
                <h1 className="page-title">Your Home All Around the World</h1>
                <div className="row">
                    { this.renderRentals(rentals) }
                </div>
            </div>
        )
    }
}

export default RentalHome;