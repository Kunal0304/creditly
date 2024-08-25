import { TestBed } from '@angular/core/testing';

import { CreditlyServicesService } from './creditly-services.service';

describe('CreditlyServicesService', () => {
  let service: CreditlyServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditlyServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
