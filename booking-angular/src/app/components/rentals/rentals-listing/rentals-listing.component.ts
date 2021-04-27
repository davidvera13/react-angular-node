import { Component, OnInit } from '@angular/core';
import {RentalModel} from '../../../shared/rental.model';
import {RentalService} from '../../../services/rental.service';
import {AppStorage, IRental} from '../../../shared/rental.interface';

@Component({
  selector: 'app-rentals-listing',
  templateUrl: './rentals-listing.component.html',
  styleUrls: ['./rentals-listing.component.scss']
})
export class RentalsListingComponent implements OnInit {
  public rentals: RentalModel[] = [];
  // implementing members of the interface
  isLoaded = true;

  constructor(private rentalService: RentalService) { }

  ngOnInit(): void {
    this.rentalService.getRentals()
      .subscribe((rentals: RentalModel[]) => {
        this.rentals = rentals;
      });
  }
}
