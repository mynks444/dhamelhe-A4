import { TestBed } from '@angular/core/testing';

import { PersonalData } from './personal-data';

describe('PersonalData', () => {
  let service: PersonalData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
