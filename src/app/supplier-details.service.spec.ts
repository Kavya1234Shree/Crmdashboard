import { TestBed } from '@angular/core/testing';

import { SupplierDetailsService } from './supplier-details.service';

describe('SupplierDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SupplierDetailsService = TestBed.get(SupplierDetailsService);
    expect(service).toBeTruthy();
  });
});
