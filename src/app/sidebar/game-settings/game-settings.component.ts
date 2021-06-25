import { Component, OnInit } from '@angular/core';
import {BoardService} from "../../board/board.service";
import {NgForm} from "@angular/forms";
import {CardColorService} from "../../card-color.service";

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
  ctrlColors = this.colorService.ctrlColors;

  constructor(private boardService: BoardService, private colorService: CardColorService) { }

  setChar(value: string): void {
    this.boardService.updateChar(value);
  }

  startNewGame(f: NgForm) {
    this.boardService.setNewBoard(f.value.size);
  }
}
