import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { Story } from '../story';
import { SCENES } from '../shared/scenes';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-startgame',
  templateUrl: './startgame.component.html',
  styleUrls: ['./startgame.component.css']
})
export class StartgameComponent implements OnInit {

  constructor(public charService: CharacterService) { }

  name: string;
  type: string;
  health: number;
  currentSceneId = null;

  currentScene;


  ngOnInit() {
    this.currentSceneId = 0;
    this.currentScene = SCENES[this.currentSceneId];
    this.name = this.charService.getName()
    this.type = this.charService.getType()
    this.health = this.charService.getHealth()

  }


  setScene(num) {
    this.currentSceneId = num;
    this.currentScene = SCENES[this.currentSceneId];
    this.health -= this.currentScene.damage;

  }
  // setVal(scene, choice) {
  //   this.charService.currentScene.scene = scene;
  //   this.charService.currentScene.option = choice;
  //   console.log(this.currentScene);
  //   console.log(this.charService.currentScene.option);

  // }

  // getScene() {
  //   this.currentScene = this.charService.currentScene.scene;
  // }

}
