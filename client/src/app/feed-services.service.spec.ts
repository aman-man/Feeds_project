import { TestBed } from '@angular/core/testing';

import { FeedServicesService } from './feed-services.service';

describe('FeedServicesService', () => {
  let service: FeedServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
