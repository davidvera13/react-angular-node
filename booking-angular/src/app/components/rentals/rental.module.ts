import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RentalsListingComponent} from './rentals-listing/rentals-listing.component';
import {RentalDetailsComponent} from './rental-details/rental-details.component';
import { RentalsComponent } from './rentals.component';
import {CommonModule} from '@angular/common';
import { RentalCardsComponent } from './rentals-listing/rental-cards/rental-cards.component';
import {UppercasePipe} from '../../pipes/uppercase.pipe';
import {FirstUpperLetterPipe} from '../../pipes/firstUpperLetter.pipe';
import {HighlightDirective} from '../../directives/custom.directive';
import {NgCustomIfDirective} from '../../directives/ng-custom-if.directive';
import {NgCustomForDirective} from '../../directives/ng-custom-for.directive';
import {HttpClientModule} from "@angular/common/http";
import { LandingPageComponent } from './landing-page/landing-page.component';
import {AuthGuard} from "../../guards/auth.guard";

const routes: Routes = [
  {
    path: 'rentals',
    component: RentalsComponent,
    children: [
      { path: '', component: RentalsListingComponent},
      { path: 'secret', component: LandingPageComponent, canActivate: [AuthGuard]},
      { path: ':rentalId', component: RentalDetailsComponent}
    ]},
];

@NgModule({
  declarations: [
    RentalDetailsComponent,
    RentalsListingComponent,
    RentalsComponent,
    RentalCardsComponent,
    UppercasePipe,
    FirstUpperLetterPipe,
    HighlightDirective,
    NgCustomIfDirective,
    NgCustomForDirective,
    LandingPageComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule
  ]
})
export class RentalModule { }
