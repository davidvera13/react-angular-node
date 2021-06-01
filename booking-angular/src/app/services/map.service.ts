import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable, of, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {GeoPositionResponse} from "../shared/geoPositionResponse.model";
import {MapResponseModel} from "../shared/mapResponse.model";
import * as tt from "@tomtom-international/web-sdk-maps";

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private locationCache: {[key: string]: GeoPositionResponse} = {};

  constructor(private http: HttpClient) { }

  private cacheLocation(location: string,
                        position: GeoPositionResponse): void  {
    // removing spaces
    const locationKey = this.normalizedLocation(location);
    this.locationCache[locationKey] = position;
  }

  private normalizedLocation(location): string {
    return location.replace(/\s/g, '').toLowerCase();
  }

  private getCachedLocation(location: string): GeoPositionResponse {
    const locationKey = this.normalizedLocation(location);
    return this.locationCache[locationKey];
  }

  getGeoPosition(location: string): Observable<GeoPositionResponse> {
    debugger;
    const cachedLocation = this.getCachedLocation(location)
    console.log('cachedLocation: ', cachedLocation);
    // of = Observable of cachedlocation
    return cachedLocation ?
      of(cachedLocation) : this.requestLocation(location)
  }

  private requestLocation(location: string): Observable<GeoPositionResponse> {
    const apiKey = environment.apiMapKey;
    // alert(`Requesting location of ${location}`);
    const url = `https://api.tomtom.com/search/2/geocode/${location}.JSON?key=${apiKey}`;

    return this.http.get<any>(url)
      .pipe(map((res: MapResponseModel) => {
        const results = res.results;
        if (results && results.length > 0) {
          debugger;
          // store in cache !
          const { position } = results[0];
          this.cacheLocation(location, position);
          // return results[0].position;
          return position;
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
