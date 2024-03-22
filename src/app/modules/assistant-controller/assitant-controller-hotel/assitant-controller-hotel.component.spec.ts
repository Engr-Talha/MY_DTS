import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssitantControllerHotelComponent } from './assitant-controller-hotel.component';

describe('AssitantControllerHotelComponent', () => {
  let component: AssitantControllerHotelComponent;
  let fixture: ComponentFixture<AssitantControllerHotelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssitantControllerHotelComponent]
    });
    fixture = TestBed.createComponent(AssitantControllerHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
