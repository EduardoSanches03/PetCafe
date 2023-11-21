import { TestBed } from '@angular/core/testing';

import { AdocoesService } from './adocoes.service';

describe('AdocoesService', () => {
  let service: AdocoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdocoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
