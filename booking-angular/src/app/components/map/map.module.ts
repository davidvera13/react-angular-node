import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TomtomComponent } from './tomtom/tomtom.component';



@NgModule({
  declarations: [TomtomComponent],
  exports: [
    TomtomComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MapModule { }
