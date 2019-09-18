import { TestBed } from '@angular/core/testing';

import { ShowNavService } from './show-nav.service';

describe('ShowNavService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowNavService = TestBed.get(ShowNavService);
    expect(service).toBeTruthy();
  });
});
