import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistantControllerTravelAgenctComponent } from './assistant-controller-travel-agenct.component';

describe('AssistantControllerTravelAgenctComponent', () => {
  let component: AssistantControllerTravelAgenctComponent;
  let fixture: ComponentFixture<AssistantControllerTravelAgenctComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssistantControllerTravelAgenctComponent]
    });
    fixture = TestBed.createComponent(AssistantControllerTravelAgenctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
