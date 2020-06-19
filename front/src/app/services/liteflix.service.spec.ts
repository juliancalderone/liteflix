import { TestBed, inject } from '@angular/core/testing';

import { LiteflixService } from './liteflix.service';

describe('LiteflixService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LiteflixService]
    });
  });

  it('should be created', inject([LiteflixService], (service: LiteflixService) => {
    expect(service).toBeTruthy();
  }));
});
