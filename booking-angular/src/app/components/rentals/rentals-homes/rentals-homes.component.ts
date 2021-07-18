import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {RentalService} from "../../../services/rental.service";
import {RentalModel} from "../../../shared/rental.model";

@Component({
  selector: 'app-rentals-homes',
  templateUrl: './rentals-homes.component.html',
  styleUrls: ['./rentals-homes.component.scss']
})
export class RentalsHomesComponent implements OnInit {
  city: string;
  rentals: RentalModel[];
  isFetching = false;

  constructor(private route: ActivatedRoute,
              private rentalService: RentalService) { }

  ngOnInit(): void {
    // read url params
    this.route.params.subscribe((params: Params) => {
      this.city = params.city;
      this.getRentals();
    })
  }

  getRentals() {
    this.rentals = [];
    this.isFetching = true;
    this.rentalService.getRentalsByCityName(this.city)
      .subscribe(rentals => {
        this.rentals = rentals;
        this.isFetching = false;
      })
  }

}
