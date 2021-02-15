import { Component } from '@angular/core';
import {AppDecorator} from './decorators';

@AppDecorator({
  message: 'Hello World!'
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'booking-angular';
  test: string = 'We are just testing';

}
