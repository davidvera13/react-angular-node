import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tomtom',
  templateUrl: './tomtom.component.html',
  styleUrls: ['./tomtom.component.scss']
})
export class TomtomComponent implements OnInit {
  @Input() location: string;

  constructor() { }

  ngOnInit(): void {
  }

}
