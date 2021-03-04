import {Component, Input, EventEmitter, Output} from '@angular/core';
import {RentalModel} from '../../../../shared/rental.model';

@Component({
  selector: 'app-rental-cards',
  templateUrl: './rental-cards.component.html',
  styleUrls: ['./rental-cards.component.scss']
})
export class RentalCardsComponent {
  @Input('rental') rental: RentalModel = {} as RentalModel;
  @Input('childData') childData: number = 0 as number;
  @Output() childDataChange = new EventEmitter<number>();
  constructor() { }

  onChangeData($event: { preventDefault: () => void; }): void {
    this.childData = 42;
    $event.preventDefault();
    this.childDataChange.emit(this.childData);
  }
}
