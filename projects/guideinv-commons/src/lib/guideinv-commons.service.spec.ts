import { TestBed } from '@angular/core/testing';

import { GuideinvCommonsService } from './guideinv-commons.service';

describe('GuideinvCommonsService', () => {
  let service: GuideinvCommonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuideinvCommonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
