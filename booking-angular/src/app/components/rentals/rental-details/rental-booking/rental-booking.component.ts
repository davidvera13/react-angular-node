import {Component, Input, OnInit} from '@angular/core';
import {Booking} from "../../../../shared/booking.model";
import {Moment} from "moment";
import {RentalModel} from "../../../../shared/rental.model";
import {NgxSmartModalService} from "ngx-smart-modal";
import {TimeService} from "../../../../services/time.service";
import {BookingService} from "../../../../services/booking.service";
import {ActivatedRoute} from "@angular/router";
import {RentalService} from "../../../../services/rental.service";
import {ToastrService} from "ngx-toastr";
import ApiError = BookingApp.ApiError;


@Component({
  selector: 'app-rental-booking',
  templateUrl: './rental-booking.component.html',
  styleUrls: ['./rental-booking.component.scss']
})
export class RentalBookingComponent implements OnInit {
  @Input('isAuth') isAuth = false;
  @Input('rental') rental: RentalModel = {} as RentalModel;
  errors: ApiError[] = [];

  booking: Booking;
  madeBookings: string[] = [];
  selected: {startDate: any, endDate: any};
  locale = {
    format: 'YYYY/MM/DD'
  }


  constructor(public ngxSmartModalService: NgxSmartModalService,
              public toastr: ToastrService,
              private route: ActivatedRoute,
              private rentalService: RentalService,
              private bookingService: BookingService,
              public timeService: TimeService) { }

  ngOnInit(): void {
    // i don't get the rental passed to child component ... i call getRentalById and then
    // call the get bookings. Not so "clean" but it works
    this.route.params.subscribe((params) => {
      this.rentalService.getRentalById(params.rentalId)
        .subscribe((rental) => {
          this.rental = rental;
          this.bookingService.getBookings(this.rental._id)
            .subscribe((bookings) => {
              console.log("bookings")
              console.log(bookings)
              // bookings.forEach(booking => {
              //   const dateRange = this.timeService.getRangeOfDates(booking.startAt, booking.endAt);
              //   this.madeBookings.push(...dateRange);
              // })
              bookings.forEach(booking => this.addBookedDates(booking.startAt, booking.endAt))
            }, (err) => {
              console.log(err)
            })
        });
    });
    console.log(this.rental)
    this.initBooking();

  }

  createBooking(): void {
    this.booking.rental = {...this.rental};
    this.errors = [];
    this.bookingService
      .createBooking(this.booking)
      .subscribe(() => {
        // alert("Created booking");
        this.addBookedDates(this.booking.startAt, this.booking.endAt);
        this.selected = null;
        this.initBooking();
        if(this.modal.close()) {
          this.toastr.success(
            "Booking successful",
            "Booking",
            {timeOut: 3000, closeButton: true}
          );
        }

      }, (errors) => {
        this.errors = errors;
        alert("We can't make booking")

      })
  }

  initBooking(): void {
    this.booking = new Booking();
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
  openConfirmationModal(): void {
    // this.toastr.success(
    //   "Booking successful",
    //   "Booking",
    //   {timeOut: 3000, closeButton: true}
    // );
    this.modal.open()
  }

  private addBookedDates(startAt: string, endAt: string): void {
    const dateRange = this.timeService.getRangeOfDates(startAt, endAt);
    this.madeBookings.push(...dateRange);
  }

  get modal() {
    return this.ngxSmartModalService.getModal("confirmationModal");
  }

  // doesn't work as classic function
  checkDateIsInvalid = (date:Moment): boolean => {
    return this.timeService.isPastDate(date) ||
      this.madeBookings.includes(date.format());
  }
}
