import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditvendamodalComponent } from './editvendamodal.component';

describe('EditvendamodalComponent', () => {
  let component: EditvendamodalComponent;
  let fixture: ComponentFixture<EditvendamodalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditvendamodalComponent]
    });
    fixture = TestBed.createComponent(EditvendamodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
