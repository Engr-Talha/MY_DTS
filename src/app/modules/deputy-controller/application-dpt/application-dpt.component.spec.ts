import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationDptComponent } from './application-dpt.component';

describe('ApplicationDptComponent', () => {
  let component: ApplicationDptComponent;
  let fixture: ComponentFixture<ApplicationDptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationDptComponent]
    });
    fixture = TestBed.createComponent(ApplicationDptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
