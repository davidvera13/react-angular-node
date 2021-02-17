import { Component, OnInit } from '@angular/core';
import {RentalModel} from '../../../shared/rental.model';

@Component({
  selector: 'app-rentals-listing',
  templateUrl: './rentals-listing.component.html',
  styleUrls: ['./rentals-listing.component.scss']
})
export class RentalsListingComponent implements OnInit {
  // fake data
  rentals: RentalModel[] = [
    {
      _id: '2',
      title: 'Central Apartment 2',
      city: 'San Francisco',
      street: 'Main street',
      category: 'condo',
      image: 'http://via.placeholder.com/350x250',
      numOfRooms: 2,
      description: 'Very nice apartment',
      dailyPrice: 12,
      shared: true,
      createdAt: '24/12/2017'
    },
    {
      _id: '3',
      title: 'Central Apartment 3',
      city: 'Bratislava',
      street: 'Hlavna',
      category: 'condo',
      image: 'http://via.placeholder.com/350x250',
      numOfRooms: 2,
      description: 'Very nice apartment',
      dailyPrice: 334,
      shared: true,
      createdAt: '24/12/2017'
    },
    {
      _id: '4',
      title: 'Central Apartment 4',
      city: 'Berlin',
      street: 'Haupt strasse',
      category: 'house',
      image: 'http://via.placeholder.com/350x250',
      numOfRooms: 9,
      description: 'Very nice apartment',
      dailyPrice: 33,
      shared: true,
      createdAt: '24/12/2017'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
