import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import * as tt from '@tomtom-international/web-sdk-maps';
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-tomtom',
  templateUrl: './tomtom.component.html',
  styleUrls: ['./tomtom.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TomtomComponent implements OnInit {
  @Input() set location(location: string)  {
    this.generateMap();
  };

  constructor() {
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

}
