import { Injectable } from '@angular/core';
import {RentalModel} from '../shared/rental.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
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

  public getRentals(): Observable<RentalModel[]> {
    // return this.rentals;
    // we will simulate also async call
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(this.rentals);
      }, 2000);
    });
  }
}
