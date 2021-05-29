import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TomtomComponent } from './tomtom.component';

describe('TomtomComponent', () => {
  let component: TomtomComponent;
  let fixture: ComponentFixture<TomtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TomtomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TomtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
