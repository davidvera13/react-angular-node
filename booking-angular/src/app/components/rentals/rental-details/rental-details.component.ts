import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RentalService} from '../../../services/rental.service';
import {RentalModel} from '../../../shared/rental.model';

@Component({
  selector: 'app-rentals-details',
  templateUrl: './rental-details.component.html',
  styleUrls: ['./rental-details.component.scss']
})
export class RentalDetailsComponent implements OnInit {

  // @ts-ignore
  rental: RentalModel;
  constructor(private route: ActivatedRoute,
              private rentalService: RentalService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.rentalService.getRentalById(params.rentalId)
        .subscribe((rental) => {
          this.rental = rental;
        });
    });
  }

}
