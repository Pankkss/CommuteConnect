import { TestBed } from '@angular/core/testing';

import { GetRidesService } from './get-rides.service';

describe('GetRidesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetRidesService = TestBed.get(GetRidesService);
    expect(service).toBeTruthy();
  });
});
