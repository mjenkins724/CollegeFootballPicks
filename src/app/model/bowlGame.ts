export class BowlGame {
  constructor(public id: number,
              public gamePoints: number,
              public spreadPoints: number,
              public underdogPoints: number,
              public date: string,
              public favoriteTeam: string,
              public underdogTeam: string,
              public favoriteRecord: string,
              public underdogRecord: string,
              public spread: number) {}

  isFavoriteTeamPicked: boolean;
  isUnderdogTeamPicked: boolean;
  userTeamPick: string;
  userSpreadPick: number;
}
