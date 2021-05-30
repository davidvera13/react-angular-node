import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {GeoPositionResponse} from "../shared/geoPositionResponse.model";
import {MapResponseModel} from "../shared/mapResponse.model";

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
      }));
  }
}
