import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditadocaomodalComponent } from './editadocaomodal.component';

describe('EditadocaomodalComponent', () => {
  let component: EditadocaomodalComponent;
  let fixture: ComponentFixture<EditadocaomodalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditadocaomodalComponent]
    });
    fixture = TestBed.createComponent(EditadocaomodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
