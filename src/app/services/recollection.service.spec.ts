import { TestBed, inject } from '@angular/core/testing';

import { RecollectionService } from './recollection.service';

describe('RecollectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecollectionService]
    });
  });

  it('should be created', inject([RecollectionService], (service: RecollectionService) => {
    expect(service).toBeTruthy();
  }));
});
