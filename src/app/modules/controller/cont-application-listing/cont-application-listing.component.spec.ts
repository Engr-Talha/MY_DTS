import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContApplicationListingComponent } from './cont-application-listing.component';

describe('ContApplicationListingComponent', () => {
  let component: ContApplicationListingComponent;
  let fixture: ComponentFixture<ContApplicationListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContApplicationListingComponent]
    });
    fixture = TestBed.createComponent(ContApplicationListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
