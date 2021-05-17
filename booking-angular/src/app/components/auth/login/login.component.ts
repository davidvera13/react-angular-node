import {Component, OnDestroy, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {forbiddenEmailValidator, sameAsValidator } from "../../../validators/functions";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup
  emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  message: string;
  // if we change from login after registration, we have the alert
  // displayed on the new page
  messageTimeOut: number;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.initForm();
    this.checkMessage();
  }

  ngOnDestroy(): void {
    this.messageTimeOut && clearTimeout(this.messageTimeOut);
  }

  checkMessage(): void {
    this.route.queryParams.subscribe(params => {
      if (params.message) {
        this.message = params.message;
        this.messageTimeOut = setTimeout(() => {
          // alert('#login > Removing query params')
          this.message = null;
          this.router.navigate([], {
            replaceUrl: true,
            queryParams: { message: null},
            queryParamsHandling: 'merge'
          })
        }, 3000)
      }
    });
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
