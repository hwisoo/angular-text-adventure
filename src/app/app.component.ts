import { Component } from '@angular/core';
import { CharacterService } from './character.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public charService: CharacterService) {}
  
  name = this.charService.getName();

}
