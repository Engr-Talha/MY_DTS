import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratechallanComponent } from './generatechallan.component';

describe('GeneratechallanComponent', () => {
  let component: GeneratechallanComponent;
  let fixture: ComponentFixture<GeneratechallanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GeneratechallanComponent]
    });
    fixture = TestBed.createComponent(GeneratechallanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
