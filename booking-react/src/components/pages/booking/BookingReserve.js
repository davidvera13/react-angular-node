import React from "react";
import DateRangePicker from "react-bootstrap-daterangepicker";

import Moment from 'moment';
import ApiErrors from "../auth-component/forms/ApiErrors";
import { extendMoment } from 'moment-range';
import BookingModal from "../../shared/model-component/BookingModal";
import { createBooking, getBookings } from "../../../store/actions";
import { ToastContainer, toast } from 'react-toastify';
import {Link} from "react-router-dom";

const moment = extendMoment(Moment);

// //    "react-bootstrap-daterangepicker": "^7.0.0",
class BookingReserve extends React.Component{
    constructor() {
        super(undefined);
        this.bookedOutDates = [];
        this.dateRef = React.createRef();
        this.state = {
            errors: [],
            proposedBooking: {
                guests: '',
                startAt: null,
                endAt: null
            }
        };
    }
    async componentDidMount() {
        const { rental } = this.props;
        // const bookings = await getBookings(rental._id);
        // this.bookedOutDates.push(...bookings);
        this.bookedOutDates = await getBookings(rental._id);
    }

    handleGuestsChange = (event) => {
        this.setState({
            proposedBooking: {
                ...this.state.proposedBooking,
                guests: parseInt(event.target.value, 10)
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

    // startAt: 2020/03/03 - endAt: 2020/03/15
    // startAt: 2020/03/07 should not be a valid date
    checkInvalidDates = (date) => {
        // if date is invalid return true
        let isBookedDate = false;
        // iterate
        isBookedDate = this.bookedOutDates.some(booking => {
            return moment
                .range(booking.startAt, booking.endAt)
                .contains(date)
        })
        return date < moment().add(-1, 'days') || isBookedDate;
    }

    onProcessData = () => {
        // alert("Alert calling !")
        this.setState({
            proposedBooking: {
                ...this.state.proposedBooking,
                nights: this.nights,
                price: this.totalPrice,
                rental: this.props.rental
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

    createRentalBooking = (closeCallback) => {
        // create booking here
        // alert(JSON.stringify(this.state))
        createBooking(this.state.proposedBooking)
            .then(createdBooking => {
                // console.log(createdBooking);
                this.bookedOutDates.push(createdBooking);
                this.resetData();
                // alert('Success');
                toast.success("Booking has been created", {
                    autoClose: 4000,
                    position: toast.POSITION.TOP_RIGHT
                })
                closeCallback();
            })
            .catch((errors) => {
                // console.log(error);
                // alert('Error' + error);
                this.setState({errors});
            })
    }

    resetData = () => {
        this.dateRef.current.value = "";
        this.setState({
            errors: [],
            proposedBooking: {
                guests: '', startAt: null, endAt: null
            }
        })
    }

    formattedDate = () => {
        console.log(this.dateRef.current ? this.dateRef.current.value : '')
        return this.dateRef.current ? this.dateRef.current.value : '';
    }

    render() {
        const { rental, isAuth } = this.props;
        const {
            errors,
            proposedBooking: { nights, guests, price}
        } = this.state;

        return (
            <div className='booking'>
                <h3 className='booking-price'>
                    $ { rental.dailyPrice }
                    <span className='booking-per-night'>
                        per night
                    </span>
                </h3>
                <hr></hr>
                {!isAuth &&
                <div>
                    <Link
                        to ={{pathname: '/login'}}
                        className="btn btn-booking-main btn-block">
                        Please login
                    </Link>
                </div>
                }
                {isAuth &&
                    <>
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
                            onSubmit={this.createRentalBooking}
                            title="Booking confirmation"
                            subtitle={"Date : " + this.formattedDate()}
                            openBtn={
                                <button
                                    onClick={this.onProcessData}
                                    disabled={!this.isBookingValid}
                                    className='btn btn-bwm-main btn-block'>Reserve place now
                                </button>
                            }
                        >
                            <div className="mb-2">
                                {/*<p className='modal-subtitle'>Date : {this.formattedDate()}</p>*/}
                                <em>{nights} </em>Nights / <em>$ {rental.dailyPrice}</em> per night
                                <p>Guests : {guests}</p>
                                <p>Price : <em>$ {price}</em></p>
                                <p>Do you confirm your booking ?</p>
                                <p>&nbsp;</p>
                            </div>
                            <ApiErrors errors={errors}/>
                        </BookingModal>
                    </>
                }


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
