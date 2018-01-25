import { TestBed, inject } from '@angular/core/testing';

import { UserPickSetService } from './user-pick-set.service';

describe('UserPickSetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserPickSetService]
    });
  });

  it('should be created', inject([UserPickSetService], (service: UserPickSetService) => {
    expect(service).toBeTruthy();
  }));
});
