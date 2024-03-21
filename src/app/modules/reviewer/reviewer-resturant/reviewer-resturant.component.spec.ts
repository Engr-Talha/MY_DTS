import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewerResturantComponent } from './reviewer-resturant.component';

describe('ReviewerResturantComponent', () => {
  let component: ReviewerResturantComponent;
  let fixture: ComponentFixture<ReviewerResturantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewerResturantComponent]
    });
    fixture = TestBed.createComponent(ReviewerResturantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
