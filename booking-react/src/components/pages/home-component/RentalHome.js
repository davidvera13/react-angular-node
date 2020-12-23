/* eslint-disable jsx-a11y/img-redundant-alt*/
import React from 'react';
import RentalCard from "./RentalCard";
import connect from "../../../store/connect";

class RentalHome extends React.Component {

    state = {
        rentals: []
    }
    componentDidMount() {
        debugger;
        //const store = this.context;
        const {rentals} = this.props;
        this.setState({
           rentals: rentals()
        })
    }

    renderRentals = (rentals) =>
        rentals.map((rental) =>
            <div key={rental._id} className="col-md-3">
                <RentalCard rental={rental} />
            </div>
        )

    render() {
        const { rentals } = this.state;
        // debugger;
        // this.props.alert();

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
// context is managed by Connect
//RentalHome.contextType = StateContext;
// if we need alert window we can use
export default connect(RentalHome);