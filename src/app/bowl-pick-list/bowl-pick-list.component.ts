import { Component, OnInit } from '@angular/core';
import { BowlGame } from "../model/bowlGame";
import { RadioControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-bowl-pick-list',
  templateUrl: './bowl-pick-list.component.html',
  styleUrls: ['./bowl-pick-list.component.css']
})
export class BowlPickListComponent implements OnInit {

  bowlGames: BowlGame[] = [];

  constructor() { }

  ngOnInit() {
    this.getBowlGames();
  }

  getBowlGames(): void {
    this.bowlGames.push(new BowlGame(1, 2, 1, 1, 'Dec. 26', 'Alabama', 'Miami', '11-1', '10-2', 7));
    this.bowlGames.push(new BowlGame(2, 2, 1, 1, 'Dec. 26', 'BYU', 'Clemson', '7-6', '10-2', 10));
    this.bowlGames.push(new BowlGame(3, 2, 1, 1, 'Dec. 26', 'Ole Miss', 'Miss State', '11-1', '10-2', 4.5));
    this.bowlGames.push(new BowlGame(4, 2, 1, 1, 'Dec. 26', 'Oregon', 'Ohio State', '11-1', '10-2', 21));
    this.bowlGames.push(new BowlGame(5, 2, 1, 1, 'Dec. 26', 'Stanford', 'Florida', '11-1', '10-2', 1));
  }

  setSelectedTeam($event: any, id: number) {
    let value: string = $event.target.value;
    if (value === 'favorite') {
      this.bowlGames[id - 1].userTeamPick = this.bowlGames[id - 1].favoriteTeam;
    } else {
      this.bowlGames[id - 1].userTeamPick = this.bowlGames[id - 1].underdogTeam;
    }
  }
}
