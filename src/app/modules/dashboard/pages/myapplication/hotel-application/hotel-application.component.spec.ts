import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelApplicationComponent } from './hotel-application.component';

describe('HotelApplicationComponent', () => {
  let component: HotelApplicationComponent;
  let fixture: ComponentFixture<HotelApplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelApplicationComponent]
    });
    fixture = TestBed.createComponent(HotelApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
