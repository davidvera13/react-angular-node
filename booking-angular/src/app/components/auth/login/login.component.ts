import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {forbiddenEmailValidator, sameAsValidator } from "../../../validators/functions";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.loginForm = this.fb.group({
        email: [
          '',
          [
            Validators.required,
            Validators.pattern(this.emailPattern),
            forbiddenEmailValidator('david.vera@8online.fr')
          ]
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6)
          ]
        ]
    });
  }

  // initForm(): void {
  //   this.loginForm = this.fb.group({
  //     email: [
  //       '',
  //       [
  //         Validators.required,
  //         Validators.pattern(this.emailPattern),
  //         forbiddenEmailValidator('david.vera@8online.fr')
  //       ]
  //     ],
  //     password: [
  //       '',
  //       [
  //         Validators.required,
  //         Validators.minLength(6)
  //       ]
  //     ]},
  //     {validators: [sameAsValidator(['password', 'email'])]}
  //     );
  // }

  get email(): AbstractControl  {
    return this.loginForm.get('email');
  }
  get password():AbstractControl  {
    return this.loginForm.get('password');
  }

  login() {
    if (this.loginForm.invalid)
      return;
    alert(this.formDiagnostic)
  }

  get formDiagnostic(): string {
    return JSON.stringify(this.loginForm.value)
  }
}
