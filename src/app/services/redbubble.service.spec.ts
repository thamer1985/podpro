import { TestBed } from '@angular/core/testing';

import { RedbubbleService } from './redbubble.service';

describe('RedbubbleService', () => {
  let service: RedbubbleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedbubbleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
