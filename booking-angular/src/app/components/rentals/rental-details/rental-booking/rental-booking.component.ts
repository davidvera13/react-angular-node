import {Component, Input, OnInit} from '@angular/core';
import {Moment} from "moment";

@Component({
  selector: 'app-rental-booking',
  templateUrl: './rental-booking.component.html',
  styleUrls: ['./rental-booking.component.scss']
})
export class RentalBookingComponent implements OnInit {
  @Input('isAuth') isAuth = false;
  selected: {startDate: Moment, endDate: Moment};
  locale = {
    format: 'YYYY/MM/DD'
  }


  constructor() { }

  ngOnInit(): void {
  }

  rentalBooking(): void {
    alert(JSON.stringify(this.selected))
  }
}
