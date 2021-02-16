import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalsListingComponent } from './rentals-listing.component';

describe('RentalsListingComponent', () => {
  let component: RentalsListingComponent;
  let fixture: ComponentFixture<RentalsListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalsListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
