import { Component, OnInit } from '@angular/core';
import {League} from "../../model/league";
import {Observable} from "rxjs/Observable";
import {LeagueListService} from "../../services/league.service";

@Component({
  selector: 'app-league-selector',
  templateUrl: './league-selector.component.html',
  styleUrls: ['./league-selector.component.css']
})
export class LeagueSelectorComponent implements OnInit {

  leagues$: Observable<League[]>;

  constructor(private leagueService: LeagueListService) { }

  ngOnInit() {
    this.leagues$ = this.leagueService.getLeagues();
  }
}
