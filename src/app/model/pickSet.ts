import {Pick} from "./pick";

export class PickSet {
  constructor(public userName: string,
              public userPicks: Pick[]) {}
}
