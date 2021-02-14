import React from 'react'
import {Link} from "react-router-dom";

// rentaldetails-component is the property we receive
const RentalCard = ({rental}) => {
    // const {rentaldetails-component} = props;
    return (
        <Link className="rental-link" to={`/rentals/${rental._id}`}>
            <div className="card bwm-card">
                <img className="card-img-top" src={rental.image} alt={rental.title} />
                <div className="card-body">
                    <h6 className={`card-subtitle mb-0 text-muted type-${rental.category}`}>
                        {rental.shared ? 'Shared': 'Whole'} &nbsp;
                        {rental.category} &#183; {rental.city}</h6>
                    <h5 className="card-title big-font">{rental.title}</h5>
                    <p className="card-text">
                        ${rental.dailyPrice} per Night &#183;
                        Free Cancelation
                    </p>
                </div>
            </div>
        </Link>
    );

}

export default RentalCard
