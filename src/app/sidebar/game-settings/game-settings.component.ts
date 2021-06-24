import { Component, OnInit } from '@angular/core';
import {BoardService} from "../../board/board.service";
import {NgForm} from "@angular/forms";
import {CardStatus} from "../../board/card";
import {CardColor} from "./cardColor";

@Component({
  selector: 'app-game-settings',
  templateUrl: './game-settings.component.html',
  styleUrls: ['./game-settings.component.css']
})
export class GameSettingsComponent {
  readonly chars = ['*', '#', '@', '&', '%', 'X', '?¿'];
  readonly defaultChar = this.chars[0];
  readonly sizes = [2, 4, 6];
  defaultSize = this.sizes[1];
  ctrlColors = this.boardService.ctrlColors;

  constructor(private boardService: BoardService) { }

  setChar(value: string): void {
    this.boardService.updateChar(value);
  }

  startNewGame(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }
}
