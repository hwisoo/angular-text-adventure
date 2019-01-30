import { Injectable } from '@angular/core';
import { Character } from './shared/character.model';
import { NewcharacterComponent } from './newcharacter/newcharacter.component';
// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Story } from './story';


@Injectable()
export class CharacterService {
  
  constructor() { }
  character = new Character("","")
  currentScene = {
    scene: "l1",
    option: ""
  }

  saveCharacter(createdCharacter) {
    this.character = createdCharacter;
  }

  getName() {
    return this.character.name;
  }

  getType() {
    return this.character.type;
  }
  getHealth() {
    return this.character.health;
  }

}
