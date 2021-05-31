import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import * as tt from '@tomtom-international/web-sdk-maps';
import {MapService} from "../../../services/map.service";
import {GeoPositionResponse} from "../../../shared/geoPositionResponse.model";

@Component({
  selector: 'app-tomtom',
  templateUrl: './tomtom.component.html',
  styleUrls: ['./tomtom.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TomtomComponent implements OnInit {
  private map: any;
  @Input() set location(location: string)  {
    this.generateMap();
    // we want to throw exception
    // this.getGeolocation("locationDoesntExist");
    this.getGeolocation(location);
  };

  constructor(private mapService: MapService) {
  }

  ngOnInit(): void {
    // this.generateMap();
  }
  private generateMap(): void {
    this.map = this.mapService.createMap();
    this.map.addControl(new tt.NavigationControl());
  }

  private getGeolocation(location: string): void {
    this.mapService.requestLocation(location)
      .subscribe((position: GeoPositionResponse) => {
        console.log("position ", position);
        this.mapService.initMap(this.map, position);

      }, (error: Error) => {
        // print error message with stack trace
        console.log(error.message);
        this.mapService.popUp(this.map, error);
      });
  }
}
