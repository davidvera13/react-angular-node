import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input('isAuthenticated') isAuthenticated = false;
  @Input('username') username = '';
  constructor() { }

  ngOnInit(): void {
  }

}
