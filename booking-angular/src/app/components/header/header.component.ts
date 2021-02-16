import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  welcomeHeder = 'Header component called';
  randNumber = Math.random();

  constructor() { }

  ngOnInit(): void {
  }

}
