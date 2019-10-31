import { TestBed } from '@angular/core/testing';

import { DriverDataService } from './driver-data.service';

describe('DriverDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DriverDataService = TestBed.get(DriverDataService);
    expect(service).toBeTruthy();
  });
});
