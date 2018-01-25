import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BowlPickListComponent } from "../bowl-pick-list/bowl-pick-list.component";
import {LeagueSelectorComponent} from "../league/league-selector/league-selector.component";
import {LeagueDetailsComponent} from "../league/league-details/league-details.component";

const routes: Routes = [
  /*{ path: '', redirectTo: '/pickList', pathMatch: 'full' },*/
  { path: 'pickList', component: BowlPickListComponent },
  { path: 'league', component: LeagueSelectorComponent },
  { path: 'leagueDetails/:id', component: LeagueDetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
