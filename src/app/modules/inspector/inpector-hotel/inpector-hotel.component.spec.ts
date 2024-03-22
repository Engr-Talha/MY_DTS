import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InpectorHotelComponent } from './inpector-hotel.component';

describe('InpectorHotelComponent', () => {
  let component: InpectorHotelComponent;
  let fixture: ComponentFixture<InpectorHotelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InpectorHotelComponent]
    });
    fixture = TestBed.createComponent(InpectorHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
