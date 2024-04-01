import { TestBed } from '@angular/core/testing';

import { ApiPlayService } from './api-play.service';

describe('ApiPlayService', () => {
  let service: ApiPlayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPlayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
