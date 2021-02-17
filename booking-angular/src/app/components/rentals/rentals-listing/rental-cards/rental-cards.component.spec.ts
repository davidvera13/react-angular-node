import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalCardsComponent } from './rental-cards.component';

describe('RentalCardsComponent', () => {
  let component: RentalCardsComponent;
  let fixture: ComponentFixture<RentalCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
