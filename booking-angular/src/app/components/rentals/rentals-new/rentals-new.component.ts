import { Component, OnInit } from '@angular/core';
import {RentalModel} from "../../../shared/rental.model";
import {NgForm} from "@angular/forms";
import {RentalService} from "../../../services/rental.service";
import {validateInputs} from "../../../validators/functions";

@Component({
  selector: 'app-rentals-new',
  templateUrl: './rentals-new.component.html',
  styleUrls: ['./rentals-new.component.scss']
})
export class RentalsNewComponent implements OnInit {
  rentalCategories = RentalModel.CATEGORIES;
  createdRental: RentalModel;

  constructor(private rentalService: RentalService) { }

  ngOnInit(): void {
    this.createdRental = new RentalModel();
    this.createdRental.shared = false;
    this.createdRental.category = this.rentalCategories[0];
  }

  createRental(form: NgForm) {
    validateInputs(form);
    if(form.invalid) {
      return;
    }
    this.rentalService.createRental(this.createdRental);
  }
}
