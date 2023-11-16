import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditapplicationComponent } from './editapplication.component';

describe('EditapplicationComponent', () => {
  let component: EditapplicationComponent;
  let fixture: ComponentFixture<EditapplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditapplicationComponent]
    });
    fixture = TestBed.createComponent(EditapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
