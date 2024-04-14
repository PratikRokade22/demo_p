import { TestBed } from '@angular/core/testing';

import { PhpDataServiceService } from './php-data-service.service';

describe('PhpDataServiceService', () => {
  let service: PhpDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhpDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
