import { TestBed, inject } from '@angular/core/testing';

import { LeagueListService } from './league.service';

describe('LeagueListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeagueListService]
    });
  });

  it('should be created', inject([LeagueListService], (service: LeagueListService) => {
    expect(service).toBeTruthy();
  }));
});
