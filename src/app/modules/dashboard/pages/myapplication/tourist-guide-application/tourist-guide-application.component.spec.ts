import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristGuideApplicationComponent } from './tourist-guide-application.component';

describe('TouristGuideApplicationComponent', () => {
  let component: TouristGuideApplicationComponent;
  let fixture: ComponentFixture<TouristGuideApplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TouristGuideApplicationComponent]
    });
    fixture = TestBed.createComponent(TouristGuideApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
