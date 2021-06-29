import {Component, Input, OnInit} from '@angular/core';
import {BookingResponse} from "../../../../shared/bookingResponse.model";
import {Moment} from "moment";


@Component({
  selector: 'app-rental-booking',
  templateUrl: './rental-booking.component.html',
  styleUrls: ['./rental-booking.component.scss']
})
export class RentalBookingComponent implements OnInit {
  @Input('isAuth') isAuth = false;
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
    alert(JSON.stringify(this.selected))
  }


  updatedBookingDates({startDate, endDate}: any) {
    if (!startDate || !endDate) { return; }
    debugger;
    this.booking.startAt = startDate.format();
    this.booking.endAt = endDate.format();
    alert(JSON.stringify(this.booking))


    // alert(moment(startDate).utc().format('YYYY/MM/DD hh:mm:ss') +
    //   " " + moment(endDate).utc().format('YYYY/MM/DD hh:mm:ss'))
  }

  // updatedBookingDates(dates: any) {
  //   if (!dates.startDate || !dates.endDate) { return; }
  //
  //   this.booking.startAt = dates.startDate.format();
  //   this.booking.endAt = dates.endDate.format();
  //   alert(JSON.stringify(this.booking))
  //
  //
  //   alert(moment(dates.startDate).utc().format('YYYY/MM/DD hh:mm:ss') +
  //     " " + moment(dates.endDate).utc().format('YYYY/MM/DD hh:mm:ss'))
  // }
}
