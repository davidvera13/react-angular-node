import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {RentalDetailsComponent} from './components/rentals/rental-details/rental-details.component';
import { RentalsListingComponent } from './components/rentals/rentals-listing/rentals-listing.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RentalDetailsComponent,
    RentalsListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
