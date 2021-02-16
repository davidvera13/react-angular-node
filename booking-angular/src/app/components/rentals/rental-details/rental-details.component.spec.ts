import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalsDetailsComponent } from './rental-details.component';

describe('RentalsDetailsComponent', () => {
  let component: RentalsDetailsComponent;
  let fixture: ComponentFixture<RentalsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
