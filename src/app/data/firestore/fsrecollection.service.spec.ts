import { TestBed, inject } from '@angular/core/testing';

import { FSRecollectionService } from './fsrecollection.service';

describe('FSRecollectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FSRecollectionService]
    });
  });

  it('should be created', inject([FSRecollectionService], (service: FSRecollectionService) => {
    expect(service).toBeTruthy();
  }));
});
