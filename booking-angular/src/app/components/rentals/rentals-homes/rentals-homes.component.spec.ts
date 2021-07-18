import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalsHomesComponent } from './rentals-homes.component';

describe('RentalsHomesComponent', () => {
  let component: RentalsHomesComponent;
  let fixture: ComponentFixture<RentalsHomesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalsHomesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalsHomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
