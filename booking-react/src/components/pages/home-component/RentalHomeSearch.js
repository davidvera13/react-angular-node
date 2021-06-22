import React from 'react';
import RentalCard from "./RentalCard";
import { connect } from "react-redux";
import {fetchRentals} from "store/actions";
import {withRouter} from "react-router-dom";
import {capitalize} from "../../../helpers/functions";


class RentalHomeSearch extends React.Component {

    get location() {
        return this.props.match.params.location;
    }
    getRentals (location) {
        return this.props.dispatch(fetchRentals(location));
    }
    componentDidMount() {
        // const {location} = this.props.match.params;
        // this.props.dispatch(fetchRentals(this.location));
        this.getRentals(this.location);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // const {location} = this.props.match.params;
        const {location: previousLocation } = prevProps.match.params;
        if(this.location !== previousLocation) {
            this.getRentals(this.location);
        }
    }
    get noRentalsFound() {
        const { rentals, isFetching } = this.props;
        return rentals.length === 0 && !isFetching;
    }
    renderRentals = (rentals) =>
        rentals.map((rental) =>
            <div key={rental._id} className="col-md-3">
                <RentalCard rental={rental} />
            </div>
        )

    render() {
        // const {location} = this.props.match.params;
        const { rentals } = this.props;
        return (
            <div className="card-list">
                <h1 className="page-title">Your Homes from "{capitalize(this.location)}" </h1>
                <div className="row">
                    { this.renderRentals(rentals) }
                </div>
                { this.noRentalsFound &&
                    <p className="alert alert-warning">No rentals found :(</p>
                }
            </div>
        )
    }
}
const mapStateToProps = ({rentals}) => {
    return {
        rentals: rentals.items,
        isFetching: rentals.isFetching
    }
}
export default connect(mapStateToProps)(withRouter(RentalHomeSearch));
