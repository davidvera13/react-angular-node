import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ForbiddenEmailDirective} from "../../directives/forbidden-email.directive";
import {SameAsDirective} from "../../directives/same-as.directive";

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForbiddenEmailDirective,
    SameAsDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
