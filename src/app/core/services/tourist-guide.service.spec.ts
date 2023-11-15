import { TestBed } from '@angular/core/testing';

import { TouristGuideService } from './tourist-guide.service';

describe('TouristGuideService', () => {
  let service: TouristGuideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TouristGuideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
