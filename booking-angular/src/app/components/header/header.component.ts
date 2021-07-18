import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input('isAuthenticated') isAuthenticated = false;
  @Input('username') username = '';
  @Input('logout') logout = () => {};

  constructor(private router: Router) {
  }

  onSearch(city: HTMLButtonElement) {
    console.log(city.value);
    // search = city.value;
    // console.log(search);
    city ? this.router.navigate([`/rentals/${city.value}/homes`])
      : this.router.navigate(['/rentals']);
  }
}
