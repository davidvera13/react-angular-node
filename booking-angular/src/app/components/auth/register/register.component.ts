import { Component, OnInit } from '@angular/core';
import {RegisterForm} from "../../../shared/registerForm.model";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerFormData: RegisterForm;
  emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


  constructor() {
    this.registerFormData =  new RegisterForm();
  }

  ngOnInit(): void {
  }

  register(form: NgForm): void {
    // alert(JSON.stringify(this.registerFormData));
    if (form.invalid) {
      return;
    }
  }
  validateInputs(form: NgForm): void {
    Object.keys(form.controls).forEach(controlName => {
      form.controls[controlName].markAsDirty();
    });
  }

  diagnostic(): string {
    return JSON.stringify(this.registerFormData)
  }

  get formDiagnostic(): string {
    return JSON.stringify(this.registerFormData)
  }
}
