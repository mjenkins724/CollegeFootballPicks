import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {League} from "../model/league";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LeagueListService {

  private leagueApiUrl = 'http://localhost:8080/api/league'

  constructor(private http: HttpClient) { }

  getLeagues(): Observable<League[]> {
    return this.http.get<League[]>(this.leagueApiUrl);
  }

  getLeague(id: string): Observable<League> {
    let url: string = this.leagueApiUrl + "/" + id;
    return this.http.get<League>(url);
  }

  updateLeague(league: League): Observable<League> {
    let url: string = this.leagueApiUrl + "/" + league.id;
    return this.http.put<League>(url, league, httpOptions);
  }
}
