import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RentalsListingComponent} from './rentals-listing/rentals-listing.component';
import {RentalDetailsComponent} from './rental-details/rental-details.component';
import { RentalsComponent } from './rentals.component';
import {CommonModule} from '@angular/common';
import { RentalCardsComponent } from './rentals-listing/rental-cards/rental-cards.component';
import {UppercasePipe} from '../../pipes/uppercase.pipe';

const routes: Routes = [
  {
    path: 'rentals',
    component: RentalsComponent,
    children: [
      { path: '', component: RentalsListingComponent},
      { path: ':rentalId', component: RentalDetailsComponent}
    ]},
];

@NgModule({
  declarations: [
    RentalDetailsComponent,
    RentalsListingComponent,
    RentalsComponent,
    RentalCardsComponent,
    UppercasePipe
  ],
  imports: [RouterModule.forChild(routes), CommonModule]
})
export class RentalModule { }
