import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { NewcharacterComponent } from './newcharacter/newcharacter.component';
import { CharacterService } from './character.service';
import { StartgameComponent } from './startgame/startgame.component';



@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    NewcharacterComponent,
    StartgameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
