import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RentalsListingComponent} from './components/rentals/rentals-listing/rentals-listing.component';
import {RentalDetailsComponent} from './components/rentals/rental-details/rental-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/rentals', pathMatch: 'full' },
  { path: 'rentals', component: RentalsListingComponent},
  { path: 'rentals/:rentalId', component: RentalDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
