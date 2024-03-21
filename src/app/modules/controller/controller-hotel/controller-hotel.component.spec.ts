import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllerHotelComponent } from './controller-hotel.component';

describe('ControllerHotelComponent', () => {
  let component: ControllerHotelComponent;
  let fixture: ComponentFixture<ControllerHotelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControllerHotelComponent]
    });
    fixture = TestBed.createComponent(ControllerHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
