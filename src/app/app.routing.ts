
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { NewcharacterComponent} from './newcharacter/newcharacter.component'
import { StartgameComponent} from './startgame/startgame.component'

const appRoutes: Routes = [
  {
    path: '',
    component: StartComponent
  },
  {
    path: 'newcharacter',
    component: NewcharacterComponent
  },
  {
    path: 'startgame',
    component: StartgameComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);