import {BowlGame} from "./bowlGame";
import {PickSet} from "./pickSet";

export class League {
  constructor(public id: string,
              public name: string,
              public bowlGames: BowlGame[],
              public userPickSets: PickSet[]) {}
}
