import {Component, Input } from '@angular/core';
import {RentalModel} from '../../../../shared/rental.model';

@Component({
  selector: 'app-rental-cards',
  templateUrl: './rental-cards.component.html',
  styleUrls: ['./rental-cards.component.scss']
})
export class RentalCardsComponent {
  @Input('rental') rental: RentalModel = {} as RentalModel;

  constructor() { }


}
