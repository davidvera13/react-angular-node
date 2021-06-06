import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RentalModule } from './components/rentals/rental.module';
import {AuthModule} from "./components/auth/auth.module";
import {MapModule} from "./components/map/map.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TokenInterceptor} from "./interceptors/token.interceptor";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RentalModule,
    AuthModule,
    MapModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass :TokenInterceptor,
      multi: true
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
