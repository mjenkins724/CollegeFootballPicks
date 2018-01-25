import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { BowlPickListComponent } from './bowl-pick-list/bowl-pick-list.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './router/router.module';
import { LeagueSelectorComponent } from './league/league-selector/league-selector.component';
import {LeagueListService} from "./services/league.service";
import {AngularFontAwesomeModule} from "angular-font-awesome";
import { LeagueDetailsComponent } from './league/league-details/league-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BowlPickListComponent,
    LeagueSelectorComponent,
    LeagueDetailsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [LeagueListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
