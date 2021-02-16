import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RentalsListingComponent} from './rentals-listing/rentals-listing.component';
import {RentalDetailsComponent} from './rental-details/rental-details.component';
import { RentalsComponent } from './rentals.component';

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
    RentalsComponent
  ],
  imports: [RouterModule.forChild(routes)]
})
export class RentalModule { }
