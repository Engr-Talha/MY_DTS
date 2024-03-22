import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeputyControllerHotelComponent } from './deputy-controller-hotel.component';

describe('DeputyControllerHotelComponent', () => {
  let component: DeputyControllerHotelComponent;
  let fixture: ComponentFixture<DeputyControllerHotelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeputyControllerHotelComponent]
    });
    fixture = TestBed.createComponent(DeputyControllerHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
