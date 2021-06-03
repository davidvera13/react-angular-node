import { Component, OnInit } from '@angular/core';
import {RentalModel} from "../../../shared/rental.model";
import {NgForm} from "@angular/forms";
import {RentalService} from "../../../services/rental.service";
import {validateInputs} from "../../../validators/functions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-rentals-new',
  templateUrl: './rentals-new.component.html',
  styleUrls: ['./rentals-new.component.scss']
})
export class RentalsNewComponent implements OnInit {
  rentalCategories = RentalModel.CATEGORIES;
  createdRental: RentalModel;
  errors: BookingApp.ApiError[] = [];

  constructor(private rentalService: RentalService,
              private router:  Router) { }

  ngOnInit(): void {
    this.createdRental = new RentalModel();
    this.createdRental.shared = false;
    this.createdRental.category = this.rentalCategories[0];
  }

  createRental(form: NgForm) {
    validateInputs(form);
    debugger;
    // if(form.invalid) {
    //   return;
    // }
    this.errors = [];
    this.rentalService
      .createRental(this.createdRental)
      .subscribe((res: RentalModel) => {
        console.log(res)
        this.router.navigate(['/rentals'])
      }, errors => this.errors = errors);
  }
}
