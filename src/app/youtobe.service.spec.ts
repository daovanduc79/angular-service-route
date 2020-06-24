import { TestBed } from '@angular/core/testing';

import { YoutobeService } from './youtobe.service';

describe('YoutobeService', () => {
  let service: YoutobeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YoutobeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
