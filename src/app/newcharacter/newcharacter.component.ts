import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Character } from '../shared/character.model';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-newcharacter',
  templateUrl: './newcharacter.component.html',
  styleUrls: ['./newcharacter.component.css']
})
export class NewcharacterComponent implements OnInit {


  constructor(public charService: CharacterService) { }

  ngOnInit() {
  }
  obj: Character =null;

  createChar(name, type) {
    let newChar = new Character(name, type);
    this.obj = newChar;
    this.saveChar(this.obj);
  }

  saveChar(char) {
    this.charService.saveCharacter(char);
  }


}
