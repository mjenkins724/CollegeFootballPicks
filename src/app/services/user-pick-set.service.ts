import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {PickSet} from "../model/pickSet";
import {catchError} from "rxjs/operators";
import {of} from "rxjs/observable/of";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserPickSetService {

  private userPickUrl = "api/userPicks";

  constructor(private http: HttpClient) { }

  getPickSet(leagueName: string, userName: string): Observable<PickSet> {
    const url = `${this.userPickUrl}/leagueName=${leagueName}&userName=${userName}`;
    return this.http.get<PickSet>(url).pipe(
      catchError(this.handleError<PickSet>(`getPickSet leagueName=${leagueName} userName=${userName}`))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
