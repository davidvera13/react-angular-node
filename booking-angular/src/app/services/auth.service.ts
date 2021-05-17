import { Injectable } from '@angular/core';
import {RegisterForm} from "../shared/registerForm.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginForm} from "../shared/loginForm.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(formData: RegisterForm): Observable<RegisterForm> {
    return this.http.post<RegisterForm>(`/api/v1/users/register`, formData);

  }
}
