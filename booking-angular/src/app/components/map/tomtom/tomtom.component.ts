import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import * as tt from '@tomtom-international/web-sdk-maps';
import {environment} from "../../../../environments/environment";
import {MapService} from "../../../services/map.service";

@Component({
  selector: 'app-tomtom',
  templateUrl: './tomtom.component.html',
  styleUrls: ['./tomtom.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TomtomComponent implements OnInit {
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
    const map = tt.map({
      key: environment.apiMapKey,
      container: 'map'
    });
    map.addControl(new tt.NavigationControl());
  }

  private getGeolocation(location: string): void {
    this.mapService.requestLocation(location)
      .subscribe(res => {
        console.log('tt response');
        console.log(res);
      });
  }
}
