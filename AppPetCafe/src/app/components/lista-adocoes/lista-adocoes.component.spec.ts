import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAdocoesComponent } from './lista-adocoes.component';

describe('ListaAdocoesComponent', () => {
  let component: ListaAdocoesComponent;
  let fixture: ComponentFixture<ListaAdocoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaAdocoesComponent]
    });
    fixture = TestBed.createComponent(ListaAdocoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
