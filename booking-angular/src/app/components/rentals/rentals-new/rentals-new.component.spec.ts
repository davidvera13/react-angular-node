import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalsNewComponent } from './rentals-new.component';

describe('RentalsNewComponent', () => {
  let component: RentalsNewComponent;
  let fixture: ComponentFixture<RentalsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalsNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
