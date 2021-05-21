import { Injectable } from '@angular/core';
import {RegisterForm} from "../shared/registerForm.model";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, map } from "rxjs/operators";
import {extractApiErrors} from "../shared/helper/function";
import { JwtHelperService } from "@auth0/angular-jwt";
import { DecodedToken } from '../shared/decodedToken.model'



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  jwtHelperService = new JwtHelperService();
  private decodedToken: DecodedToken;

  constructor(private http: HttpClient) {
    this.decodedToken = new DecodedToken();
  }

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
          const storedToken = this.saveToken(response.token)
          return response.token;

        }),
        catchError((error: HttpErrorResponse) =>
          throwError(extractApiErrors(error))
      ));
  }

  private saveToken(token): string | null {
    const decodedToken = this.jwtHelperService.decodeToken(token)
    console.log(decodedToken)
    if(!decodedToken) {
      return null;
    }
    localStorage.setItem('token', token)
    return token;
  }
}
