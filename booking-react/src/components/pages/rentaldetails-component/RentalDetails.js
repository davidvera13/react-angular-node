import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchRentalById } from "store/actions";
import RentalInfo from "./RentalInfo";

function RentalDetailInfo() {
    return null;
}

class RentalDetails extends React.Component {
    componentDidMount() {
        // const rentalId = this.props.match.params.id;
        const { id } = this.props.match.params;
        this.props.dispatch(fetchRentalById(id))
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
                            {/* <!-- TODO: Display rental map --> */}
                            <img src={rental.image} alt={rental.title} />
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
