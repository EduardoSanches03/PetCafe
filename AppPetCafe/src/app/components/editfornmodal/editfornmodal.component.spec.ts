import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfornmodalComponent } from './editfornmodal.component';

describe('EditfornmodalComponent', () => {
  let component: EditfornmodalComponent;
  let fixture: ComponentFixture<EditfornmodalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditfornmodalComponent]
    });
    fixture = TestBed.createComponent(EditfornmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
