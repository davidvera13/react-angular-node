import { Injectable } from '@angular/core';
import {RentalModel} from '../shared/rental.model';
import {Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(private http: HttpClient) { }

  public getRentals(): Observable<RentalModel[]> {
    return this.http.get<RentalModel[]>(`http://localhost:4200/api/v1/rentals/`);
  }

  public getRentalById(rentalId: string): Observable<RentalModel> {
    return this.http.get<RentalModel>(`http://localhost:4200/api/v1/rentals/${rentalId}`);
  }
}
