import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdocoesComponent } from './adocoes.component';

describe('AdocoesComponent', () => {
  let component: AdocoesComponent;
  let fixture: ComponentFixture<AdocoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdocoesComponent]
    });
    fixture = TestBed.createComponent(AdocoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
