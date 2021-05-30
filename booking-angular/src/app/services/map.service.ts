import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) { }

  requestLocation(location: string): Observable<any> {
    const apiKey = environment.apiMapKey;
    // alert(`Requesting location of ${location}`);
    const url = `https://api.tomtom.com/search/2/geocode/${location}.JSON?key=${apiKey}`;
    return this.http.get<any>(url);
  }
}
