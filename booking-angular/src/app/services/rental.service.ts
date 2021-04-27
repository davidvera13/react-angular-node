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
      _id: '1',
      title: 'Central Apartment 1',
      city: 'san francisco',
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
      _id: '2',
      title: 'Central Apartment 2',
      city: 'san francisco',
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
      city: 'bratislava',
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
      city: 'berlin',
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
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(this.rentals);
      }, 2000);
    });
  }

  public getRentalById(rentalId: string): Observable<RentalModel> {
    return new Observable(observer => {
      const rental = this.rentals.find(storedRental => storedRental._id === rentalId);
      setTimeout(() => {
        observer.next(rental);
      }, 2000);
    });
  }
}
