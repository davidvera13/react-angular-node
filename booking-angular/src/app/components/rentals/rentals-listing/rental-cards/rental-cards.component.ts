import {Component, Input, OnInit} from '@angular/core';
import {RentalModel} from '../../../../shared/rental.model';

@Component({
  selector: 'app-rental-cards',
  templateUrl: './rental-cards.component.html',
  styleUrls: ['./rental-cards.component.scss']
})
export class RentalCardsComponent implements OnInit {
  @Input('rental') rental: RentalModel = {} as RentalModel;

  constructor() { }

  ngOnInit(): void {
  }

}
