import { Component, OnInit } from '@angular/core';
import {LeagueListService} from "../../services/league.service";
import {League} from "../../model/league";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-league-details',
  templateUrl: './league-details.component.html',
  styleUrls: ['./league-details.component.css']
})
export class LeagueDetailsComponent implements OnInit {

  league: League;
  editMode: boolean = false;

  constructor(private route: ActivatedRoute, private leagueService: LeagueListService) { }

  ngOnInit() {
    const id: string = this.route.snapshot.paramMap.get('id');
    this.leagueService.getLeague(id).subscribe(league => this.league = league);
  }

  onEdit(): void {
    this.editMode = true;
  }

  onCancel(): void {
    this.editMode = false;
  }

  onSave():void {
    this.editMode = false;

    this.leagueService.updateLeague(this.league).subscribe();
  }
}
