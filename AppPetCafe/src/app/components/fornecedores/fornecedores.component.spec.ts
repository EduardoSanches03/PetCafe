import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecedorComponent } from './fornecedores.component';
//FornecedoresComponent
describe('FornecedorComponent', () => {
  let component: FornecedorComponent;
  let fixture: ComponentFixture<FornecedorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FornecedorComponent]
    });
    fixture = TestBed.createComponent(FornecedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
