import { TestBed } from '@angular/core/testing';

import { EaCryptoService } from './ea-crypto.service';

describe('EaCryptoService', () => {
  let service: EaCryptoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EaCryptoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
