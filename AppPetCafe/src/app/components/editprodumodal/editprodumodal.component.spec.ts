import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprodumodalComponent } from './editprodumodal.component';

describe('EditprodumodalComponent', () => {
  let component: EditprodumodalComponent;
  let fixture: ComponentFixture<EditprodumodalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditprodumodalComponent]
    });
    fixture = TestBed.createComponent(EditprodumodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
