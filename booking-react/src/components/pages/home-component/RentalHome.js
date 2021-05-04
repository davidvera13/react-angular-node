/* eslint-disable jsx-a11y/img-redundant-alt*/
import React from 'react';
import RentalCard from "./RentalCard";
import { connect } from "react-redux";
import {fetchRentals} from "store/actions";
import axios from "axios";

class RentalHome extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchRentals());
    }

    renderRentals = (rentals) =>
        rentals.map((rental) =>
            <div key={rental._id} className="col-md-3">
                <RentalCard rental={rental} />
            </div>
        )

    render() {
        const { rentals } = this.props;
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
const mapStateToProps = (state) => {
    return {
        rentals: state.rentals
    }
}
export default connect(mapStateToProps)(RentalHome);
