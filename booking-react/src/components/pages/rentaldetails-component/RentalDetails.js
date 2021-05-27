import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchRentalById } from "store/actions";
import RentalInfo from "./RentalInfo";
import TomMap from "../map-component/TomMap"

// eslint-disable-next-line
function RentalDetailInfo() {
    return null;
}

class RentalDetails extends React.Component {
    componentDidMount() {
        // const rentalId = this.props.match.params.id;
        const { id } = this.props.match.params;
        this.props.dispatch(fetchRentalById(id))
    }

    componentWillUnmount() {
        this.props.dispatch({type: 'UNMOUNT_RENTAL'})
    }

    get location() {
        const { rental: { street, city } } = this.props;
        return street && city && city + ', ' + street;

    }

    render() {
        const { rental, isFetching } = this.props;
        if (isFetching) {
            // we can add loader
            return null;
        }
        return (
            <section id="rentalDetails">
                <div className="upper-section">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={rental.image} alt={rental.title} />
                        </div>
                        <div className="col-md-6">
                            <TomMap location={this.location} />
                        </div>
                    </div>
                </div>

                <div className="details-section">
                    <div className="row">
                        <div className="col-md-8">
                            <RentalInfo rental={ rental } />

                        </div>
                        <div className="col-md-4"> BOOKING</div>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = ({rental}) => ({ rental: rental.item, isFetching: rental.isFetching })

const RentalDetailWithRouter = withRouter(RentalDetails);
export default connect(mapStateToProps)(RentalDetailWithRouter);
