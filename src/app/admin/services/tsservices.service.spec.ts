import { TestBed } from '@angular/core/testing';

import { TsservicesService } from './tsservices.service';

describe('TsservicesService', () => {
  let service: TsservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TsservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
