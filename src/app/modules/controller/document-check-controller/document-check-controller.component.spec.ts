import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentCheckControllerComponent } from './document-check-controller.component';

describe('DocumentCheckControllerComponent', () => {
  let component: DocumentCheckControllerComponent;
  let fixture: ComponentFixture<DocumentCheckControllerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentCheckControllerComponent]
    });
    fixture = TestBed.createComponent(DocumentCheckControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
