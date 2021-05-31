import { Injectable } from '@angular/core';
import {RegisterForm} from "../shared/registerForm.model";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, map } from "rxjs/operators";
import {extractApiErrors} from "../shared/helper/function";
import { JwtHelperService } from "@auth0/angular-jwt";
import { DecodedToken } from '../shared/decodedToken.model'
import * as moment from 'moment';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  jwtHelperService = new JwtHelperService();
  private decodedToken: DecodedToken;
  redirectUrl: string;

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
          this.saveToken(response.token)
          return response.token;

        }),
        catchError((error: HttpErrorResponse) =>
          throwError(extractApiErrors(error))
      ));
  }

  logout() {
    localStorage.removeItem('token');
    this.decodedToken = new DecodedToken();
  }
  checkAuthentication(): boolean {
    const authToken = localStorage.getItem('token');
    if(!authToken) {
      return false;
    }
    const decodedToken = this.jwtHelperService.decodeToken(authToken);
    if(!decodedToken) {
      return false;
    }
    this.decodedToken = decodedToken;
    return true;
  }

  private saveToken(token): string | null {
    const decodedToken = this.jwtHelperService.decodeToken(token)
    // console.log(decodedToken)
    if(!decodedToken) {
      return null;
    }
    this.decodedToken = decodedToken;

    localStorage.setItem('token', token)
    return token;
  }

  get isAuthenticated(): boolean {
    const isAuth = moment().isBefore(this.expiration);
    // console.log(isAuth)
    return isAuth;
  }

  get username(): string {
    const username = this.decodedToken.username;
    // console.log(username)
    return username;
  }

  private get expiration() {
    const exp = moment.unix(this.decodedToken.exp);
    // console.log(exp)
    return exp;
  }
}
