import { Injectable } from '@angular/core';
import {RegisterForm} from "../shared/registerForm.model";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {LoginForm} from "../shared/loginForm.model";
import {catchError} from "rxjs/operators";
import {extractApiErrors} from "../shared/helper/function";

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
}
