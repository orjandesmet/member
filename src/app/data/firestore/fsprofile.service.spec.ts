import { inject, TestBed } from '@angular/core/testing';
import { FSProfileService } from './fsprofile.service';


describe('FSProfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FSProfileService]
    });
  });

  it('should be created', inject([FSProfileService], (service: FSProfileService) => {
    expect(service).toBeTruthy();
  }));
});
