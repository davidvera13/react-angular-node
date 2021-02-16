import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter = 0;

  onIncrement($event: MouseEvent): void {
    console.log('# onIncrement method called');
    console.log($event);
    this.counter++;
  }

  onDecrement($event: MouseEvent): void {
    console.log('# onIncrement method called');
    console.log($event);
    this.counter--;
  }

  onUpdate(value: number): void {
    console.log('# onUpdate method called');
    this.counter += value;
  }


}
