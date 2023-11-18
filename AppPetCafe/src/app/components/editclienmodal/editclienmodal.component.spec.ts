import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditclienmodalComponent } from './editclienmodal.component';

describe('EditclienmodalComponent', () => {
  let component: EditclienmodalComponent;
  let fixture: ComponentFixture<EditclienmodalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditclienmodalComponent]
    });
    fixture = TestBed.createComponent(EditclienmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
