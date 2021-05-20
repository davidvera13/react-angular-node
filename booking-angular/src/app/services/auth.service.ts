import { Injectable } from '@angular/core';
import {RegisterForm} from "../shared/registerForm.model";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, map } from "rxjs/operators";
import {extractApiErrors} from "../shared/helper/function";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(formData: RegisterForm): Observable<any> {
    return this.http
      .post<any>(`/api/v1/users/register`, formData)
      .pipe(catchError((error: HttpErrorResponse) =>
        throwError(extractApiErrors(error))
      ));
  }
  login(formData: any): Observable<any> {
    return this.http
      .post<any>(`/api/v1/users/login`, formData)
      .pipe(
        map((response: any) => {
          // here we get the token
          // this.saveToken(response.token);
          return response.token;

        }),
        catchError((error: HttpErrorResponse) =>
          throwError(extractApiErrors(error))
      ));
  }

  private saveToken(token) {
    alert('Im a saving token ' + token);
  }
}
