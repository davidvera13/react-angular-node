import { Injectable } from '@angular/core';
import {RegisterForm} from "../shared/registerForm.model";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {LoginForm} from "../shared/loginForm.model";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(formData: RegisterForm): Observable<any> {
    return this.http
      .post<any>(`/api/v1/users/register`, formData)
      .pipe(catchError((error: HttpErrorResponse) => {
        console.log(JSON.stringify(error));
        let errors = [{title: 'Error', detail: 'Ooops something went wrong'}];
        if (error && error.error && error.error.errors ) {
          errors = error.error.errors;
        }
        return throwError(errors);
      }));
  }
}
