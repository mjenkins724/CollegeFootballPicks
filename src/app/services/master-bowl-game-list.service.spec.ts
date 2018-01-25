import { TestBed, inject } from '@angular/core/testing';

import { MasterBowlGameListService } from './master-bowl-game-list.service';

describe('MasterBowlGameListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MasterBowlGameListService]
    });
  });

  it('should be created', inject([MasterBowlGameListService], (service: MasterBowlGameListService) => {
    expect(service).toBeTruthy();
  }));
});
