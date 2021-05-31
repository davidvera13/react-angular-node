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
        // new tt.Marker().setLngLat([position.lon, position.lat]).addTo(this.map);
        const markerDiv = document.createElement('div');
        markerDiv.className = 'booking-marker';
        new tt.Marker({
          element: markerDiv
        })
          .setLngLat([position.lon, position.lat])
          .addTo(this.map);
      }, (error: Error) => {
        // print error message with stack trace
        console.log(error.message);
        var popup = new tt.Popup(
          { className: 'booking-mappopup', closeButton: false, closeOnClick: false})
          .setLngLat(new tt.LngLat(0, 0))
          .setHTML(`<p>${error.message}</p>`)
          .addTo(this.map);
      });
  }
}
