import {Component, Input, OnInit} from '@angular/core';
import {BookingResponse} from "../../../../shared/bookingResponse.model";
import {Moment} from "moment";
import {RentalModel} from "../../../../shared/rental.model";


@Component({
  selector: 'app-rental-booking',
  templateUrl: './rental-booking.component.html',
  styleUrls: ['./rental-booking.component.scss']
})
export class RentalBookingComponent implements OnInit {
  @Input('isAuth') isAuth = false;
  @Input('rental') rental: RentalModel;
  booking: BookingResponse;
  selected: {startDate: any, endDate: any};
  locale = {
    format: 'YYYY/MM/DD'
  }


  constructor() { }

  ngOnInit(): void {
    this.booking = new BookingResponse();
    this.booking.guests = 1;

  }

  rentalBooking(): void {
    debugger;
    // alert(JSON.stringify(this.selected))
    alert(JSON.stringify(this.booking))
  }


  updatedBookingDates({startDate, endDate}: any) {
    if (!startDate || !endDate) { return; }
    if(startDate.isSame(endDate, 'days')) {
      this.selected = null;
      alert('invalid dates')
    }
    this.booking.startAt = startDate.format();
    this.booking.endAt = endDate.format();
    this.booking.nights = endDate.diff(startDate, 'days');
    this.booking.price = this.rental.dailyPrice * this.booking.nights;

    // alert(JSON.stringify(this.booking))
  }

  get canOpenConfirmation(): boolean {
    return this.booking.startAt &&
      this.booking.endAt &&
      this.booking.guests &&
      this.booking.guests > 0;
  }

}
