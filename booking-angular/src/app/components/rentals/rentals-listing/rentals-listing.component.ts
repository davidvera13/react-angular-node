import { Component, OnInit } from '@angular/core';
import {RentalModel} from '../../../shared/rental.model';
import {RentalService} from '../../../services/rental.service';
import {AppStorage, IRental} from '../../../shared/rental.interface';

@Component({
  selector: 'app-rentals-listing',
  templateUrl: './rentals-listing.component.html',
  styleUrls: ['./rentals-listing.component.scss']
})
export class RentalsListingComponent implements OnInit, IRental {
  public rentals: RentalModel[] = [];


  constructor(private rentalService: RentalService) { }

  // implementing members of the interface
  someData = 'someData';
  isLoaded = true;

  // output()
  parentData = 10;

  ngOnInit(): void {
    const appStorage = new AppStorage<number>();
    appStorage.addItem(42);
    appStorage.addItem(44);
    appStorage.addItem(13);

    const item = appStorage.getItem(0);
    const items = appStorage.getItems();
    console.log('single item: ', item);
    console.log('all items: ', items);
    this.rentalService.getRentals()
      .subscribe((rentals: RentalModel[]) => {
        this.rentals = rentals;
      });
  }

  // implemented method from interface
  implementMe(): string {
    return '';
  }

  onChangeParentData($event: number): void {
    this.parentData = $event;
  }
}
