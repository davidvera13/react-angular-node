import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import * as tt from '@tomtom-international/web-sdk-maps';
import {environment} from "../../../../environments/environment";
import {MapService} from "../../../services/map.service";
import {MapResponseModel} from "../../../shared/mapResponse.model";
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
    this.getGeolocation(location);
  };

  constructor(private mapService: MapService) {
  }

  ngOnInit(): void {
    // this.generateMap();
  }
  private generateMap(): void {
    this.map = tt.map({
      key: environment.apiMapKey,
      container: 'map',
      zoom: 15
    });
    this.map.addControl(new tt.NavigationControl());
  }

  private getGeolocation(location: string): void {
    this.mapService.requestLocation(location)
      .subscribe((position: GeoPositionResponse) => {
        console.log("position ", position);
        this.map.setCenter(new tt.LngLat(position.lon, position.lat));
      });
  }
}
