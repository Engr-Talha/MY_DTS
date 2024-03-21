import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectorTravelAgencyComponent } from './inspector-travel-agency.component';

describe('InspectorTravelAgencyComponent', () => {
  let component: InspectorTravelAgencyComponent;
  let fixture: ComponentFixture<InspectorTravelAgencyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InspectorTravelAgencyComponent]
    });
    fixture = TestBed.createComponent(InspectorTravelAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
