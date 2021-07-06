import {Component, Input, OnInit} from '@angular/core';
import {Booking} from "../../../../shared/booking.model";
import {Moment} from "moment";
import {RentalModel} from "../../../../shared/rental.model";
import {NgxSmartModalService} from "ngx-smart-modal";
import {TimeService} from "../../../../services/time.service";
import {BookingService} from "../../../../services/booking.service";


@Component({
  selector: 'app-rental-booking',
  templateUrl: './rental-booking.component.html',
  styleUrls: ['./rental-booking.component.scss']
})
export class RentalBookingComponent implements OnInit {
  @Input('isAuth') isAuth = false;
  @Input('rental') rental: RentalModel;
  booking: Booking;
  selected: {startDate: any, endDate: any};
  locale = {
    format: 'YYYY/MM/DD'
  }


  constructor(public ngxSmartModalService: NgxSmartModalService,
              private bookingService: BookingService,
              public timeService: TimeService) { }

  ngOnInit(): void {
    this.booking = new Booking();
    this.booking.guests = 1;
  }

  createBooking(): void {
    this.booking.rental = {...this.rental};
    this.bookingService
      .createBooking(this.booking)
      .subscribe(() => {
        alert("Created booking")
      }, (err) => {
        alert("We can't make booking")

      })
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
  openConfirmationModal(): void {
    this.ngxSmartModalService.getModal("confirmationModal").open()
  }

  // doesn't work as classic function
  checkDateIsInvalid = (date:Moment): boolean => {
    return this.timeService.isPastDate(date);
    // return true;
  }
}
