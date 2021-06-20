import React from "react";
import {capitalize} from "../../../helpers/functions";
import RentalAssets from "./RentalAssets";

const RentalInfo = ({rental}) =>
    <div className="rental">
        <h2 className={`rental-type type-${rental.category}`}>
            {rental.shared ? 'Shared' : 'Whole'} {rental.category}
        </h2>
        { rental.owner &&
            <div className="rental-owner">
                <img
                    src="https://cdn.shopify.com/s/files/1/1077/0778/files/politikats_without_quote_logo_2f61294c-3523-4bb8-bf2a-9b317c8771ff_205x@2x.png?v=1517004473"
                    alt="owner"/>
                <span>{rental.owner.username}</span>
            </div>
        }
        <h1 className="rental-title">{rental.title}</h1>
        <h2 className="rental-city">{capitalize(rental.city)}</h2>
        <div className="rental-room-info">
            <span><i className="fa fa-building">&nbsp;</i>{rental.numOfRooms} bedrooms</span>
            <span><i className="fa fa-user">&nbsp;</i> {rental.numOfRooms + 4} guests</span>
            <span><i className="fa fa-bed">&nbsp;</i> {rental.numOfRooms + 2} beds</span>
        </div>
        <p className="rental-description">
            {rental.description}
        </p>
        <hr/>
        <RentalAssets />
    </div>

export default RentalInfo;
