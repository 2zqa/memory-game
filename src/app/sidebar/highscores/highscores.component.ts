import { Component, OnInit } from '@angular/core';
import { HIGHSCORES } from "../../mock-highscores";

@Component({
  selector: 'app-highscores',
  templateUrl: './highscores.component.html',
  styleUrls: ['./highscores.component.css']
})
export class HighscoresComponent {
  highscores = HIGHSCORES;

  constructor() { }

}
