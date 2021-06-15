import React from "react";
import DateRangePicker from "react-bootstrap-daterangepicker";
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import BookingModal from "../../shared/model-component/BookingModal";
const moment = extendMoment(Moment);

// //    "react-bootstrap-daterangepicker": "^7.0.0",
class BookingReserve extends React.Component{
    constructor() {
        super(undefined);

        this.dateRef = React.createRef();
        this.state = {
            proposedBooking: {
                guests: '',
                startAt: null,
                endAt: null
            }
        };
    }

    handleGuestsChange = (event) => {
        this.setState({
            proposedBooking: {
                ...this.state.proposedBooking,
                guests: event.target.value
            }
        })
    }

    // (event, picker)
    handleApply = (_, {startDate, endDate}) => {
        // console.log(moment(startDate).format('YYYY/MM/DD') + ' to ' + moment(endDate).format('YYYY/MM/DD'));
        this.dateRef.current.value = moment(startDate).format('YYYY/MM/DD') + ' to ' + moment(endDate).format('YYYY/MM/DD');
        console.log(this.dateRef.current.value)

        this.setState({
            proposedBooking: {
                ...this.state.proposedBooking,
                startAt: startDate,
                endAt: endDate
            }
        })
    }
    checkInvalidDates = (date) => {
        // if date is invalid return true
        return date < moment().add(-1, 'days');
    }

    onProcessData = () => {
        // alert("Alert calling !")
        this.setState({
            proposedBooking: {
                ...this.state.proposedBooking,
                nights: this.nights,
                totalPrice: this.totalPrice
            }
        })
    }

    get nights() {
        const { startAt, endAt } = this.state.proposedBooking;
        if(!startAt || !endAt) {
            return null;
        }
        const range = moment.range(startAt, endAt)
        // const nights = Array.from(range.by('days') )
        return Array.from(range.by('days')).length - 1;
    }

    get totalPrice() {
        const { rental: { dailyPrice }} = this.props;
        return dailyPrice && this.nights * dailyPrice;
    }

    get isBookingValid () {
        const { startAt, endAt, guests } = this.state.proposedBooking
        return startAt && endAt && guests;
    }

    makeBooking = () => {
        alert(JSON.stringify(this.state))
    }

    formattedDate = () => {
        console.log(this.dateRef.current ? this.dateRef.current.value : '')
        return this.dateRef.current ? this.dateRef.current.value : '';
    }

    render() {
        const { rental } = this.props;
        const { proposedBooking: { nights, guests, totalPrice}} = this.state;

        return (
            <div className='booking'>
                <h3 className='booking-price'>
                    $ { rental.dailyPrice }
                    <span className='booking-per-night'>
                        per night
                    </span>
                </h3>
                <hr></hr>
                <div className='form-group'>
                    <label htmlFor='dates'>Dates</label>
                    <DateRangePicker
                        onApply={this.handleApply}
                        opens="left"
                        containerStyles={{display: 'block'}}
                        isInvalidDate={this.checkInvalidDates}>
                        <input
                            ref={this.dateRef}
                            id="dates"
                            type="text"
                            className="form-control">
                        </input>
                    </DateRangePicker>
                </div>
                <div className='form-group'>
                    <label htmlFor='guests'>Guests</label>
                    <input
                        onChange={this.handleGuestsChange}
                        value={guests}
                        type='number'
                        className='form-control'
                        id='guests'
                        aria-describedby='guests'>
                    </input>
                </div>
                {/*<button*/}
                {/*    onClick={this.makeBooking}*/}
                {/*    className='btn btn-bwm-main btn-block'>Reserve place now*/}
                {/*</button>*/}


                {/* passing button as a prop */}
                <BookingModal
                    onSubmit={this.makeBooking}
                    title="Booking confirmation"
                    subtitle={"Date : " + this.formattedDate() }
                    openBtn={
                        <button
                            onClick={this.onProcessData}
                            disabled={!this.isBookingValid}
                            className='btn btn-bwm-main btn-block'>Reserve place now
                        </button>
                    }
                >
                    {/*<p className='modal-subtitle'>Date : {this.formattedDate()}</p>*/}
                    <em>{nights} </em>Nights / <em>$ {rental.dailyPrice}</em> per night
                    <p>Guests : { guests }</p>
                    <p>Price : <em>$ { totalPrice }</em></p>
                    <p>Do you confirm your booking ?</p>
                </BookingModal>

                <hr></hr>
                <p className='booking-note-title'>People are interested into this house</p>
                <p className='booking-note-text'>
                    More than 500 people checked this rental in last month.
                </p>
            </div>
        );
    }
}

export default BookingReserve;
