import { Component, OnInit } from '@angular/core';
import {RegisterForm} from "../../../shared/registerForm.model";
import {NgForm} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {validateInputs} from "../../../validators/functions";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerFormData: RegisterForm;
  errors: BookingApp.ApiError[] = [];
  emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


  constructor(private authService: AuthService,
              private router: Router) {
    this.registerFormData =  new RegisterForm();
  }

  ngOnInit(): void {
  }

  register(form: NgForm): void {
    validateInputs(form);
    // this.errors = null;
    // alert(JSON.stringify(this.registerFormData));
    if (form.invalid) {
      return;
    }
    this.errors = [];
    // the response is not used: just for printing purpose
    this.authService
      .register(this.registerFormData)
      .subscribe(response => {
        console.log(response);
        this.router.navigate(['/login'], {
          queryParams: { message: 'You successfully registered'}
        }).then();
      }, (errors: BookingApp.ApiError[]) => {
        console.log("Errors !!!");
        console.log(errors)
        this.errors = errors;
      });
  }


  diagnostic(): string {
    return JSON.stringify(this.registerFormData)
  }

  get formDiagnostic(): string {
    return JSON.stringify(this.registerFormData)
  }
}
