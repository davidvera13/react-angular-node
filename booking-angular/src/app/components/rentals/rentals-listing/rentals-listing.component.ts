import { Component, OnInit } from '@angular/core';
import {RentalModel} from '../../../shared/rental.model';
import {RentalService} from '../../../services/rental.service';

@Component({
  selector: 'app-rentals-listing',
  templateUrl: './rentals-listing.component.html',
  styleUrls: ['./rentals-listing.component.scss']
})
export class RentalsListingComponent implements OnInit {
  public rentals: RentalModel[] = [];


  constructor(private rentalService: RentalService) { }
  
  ngOnInit(): void {
    this.rentalService.getRentals()
      .subscribe((rentals: RentalModel[]) => {
        this.rentals = rentals;
      });
  }

}
