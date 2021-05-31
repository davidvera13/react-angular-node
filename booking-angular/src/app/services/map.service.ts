import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {GeoPositionResponse} from "../shared/geoPositionResponse.model";
import {MapResponseModel} from "../shared/mapResponse.model";
import * as tt from "@tomtom-international/web-sdk-maps";

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) { }

  requestLocation(location: string): Observable<GeoPositionResponse> {
    const apiKey = environment.apiMapKey;
    // alert(`Requesting location of ${location}`);
    const url = `https://api.tomtom.com/search/2/geocode/${location}.JSON?key=${apiKey}`;
    return this.http.get<any>(url)
      .pipe(map((res: MapResponseModel) => {
        const results = res.results;
        if (results && results.length > 0) {
          return results[0].position
        } else {
          throw new Error('Location not found');
        }
      }), catchError(_ => throwError(new Error('Error, api call failed'))));
  }
  createMap(): tt.Map {
    return tt.map({
      key: environment.apiMapKey,
      container: 'map',
      zoom: 15
    });
  }
  initMap(map: tt.Map, position: GeoPositionResponse) {
    this.centerMap(map, position);
    this.addMarker(map, position);
  }
  private centerMap(map: tt.Map, position: GeoPositionResponse): void {
    map.setCenter(new tt.LngLat(position.lon, position.lat));
  }
  private addMarker(map: tt.Map, position: GeoPositionResponse): void {
    const markerDiv = document.createElement('div');
    markerDiv.className = 'booking-marker';
    new tt.Marker({
      element: markerDiv
    })
      .setLngLat([position.lon, position.lat])
      .addTo(map);
  }
  popUp(map: tt.Map, error: Error): void {
    var popup = new tt.Popup(
      { className: 'booking-mappopup', closeButton: false, closeOnClick: false})
      .setLngLat(new tt.LngLat(0, 0))
      .setHTML(`<p>${error.message}</p>`)
      .addTo(map);
  }
}
