import { Injectable } from '@angular/core';
import {RentalModel} from '../shared/rental.model';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {extractApiErrors} from "../shared/helper/function";

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(private http: HttpClient) { }

  public getRentals(): Observable<RentalModel[]> {
    return this.http.get<RentalModel[]>(`/api/v1/rentals/`);
  }

  public getRentalById(rentalId: string): Observable<RentalModel> {
    // http://localhost:4200/api/v1/rentals/${rentalId}
    return this.http.get<RentalModel>(`/api/v1/rentals/${rentalId}`);
  }

  createRental(createdRental: RentalModel): Observable<RentalModel> {
    // alert(JSON.stringify(createdRental))

    return this.http
      .post<RentalModel>('/api/v1/rentals', createdRental)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          console.log(err)
          return throwError( extractApiErrors(err) );
        }));
  }
}
