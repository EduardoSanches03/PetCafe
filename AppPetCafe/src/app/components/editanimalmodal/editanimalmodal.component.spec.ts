import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditanimalmodalComponent } from './editanimalmodal.component';

describe('EditanimalmodalComponent', () => {
  let component: EditanimalmodalComponent;
  let fixture: ComponentFixture<EditanimalmodalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditanimalmodalComponent]
    });
    fixture = TestBed.createComponent(EditanimalmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
