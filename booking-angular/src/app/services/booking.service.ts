import { Injectable } from '@angular/core';
import {Booking} from "../shared/booking.model";
import {Observable, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {extractApiErrors} from "../shared/helper/function";

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  getBookings(rentalId: string): Observable<Booking[]> {
    debugger
    console.log(rentalId)
    return this.http.get<Booking[]>(`/api/v1/rentals/${rentalId}/bookings`);
  }
  createBooking(booking: Booking): Observable<Booking> {
    return this.http
      .post<Booking>('/api/v1/bookings', booking)
      .pipe(catchError(
        (resError: HttpErrorResponse) => throwError(extractApiErrors(resError))));
  }
}
