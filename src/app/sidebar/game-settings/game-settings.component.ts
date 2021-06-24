import { Component, OnInit } from '@angular/core';
import {BoardService} from "../../board/board.service";

@Component({
  selector: 'app-game-settings',
  templateUrl: './game-settings.component.html',
  styleUrls: ['./game-settings.component.css']
})
export class GameSettingsComponent {
  readonly chars = ['*', '#', '@', '&', '%', 'X', '?¿'];
  readonly sizes = [2, 4, 6];

  constructor(private boardService: BoardService) { }

  setChar(value: string): void {
    this.boardService.updatedChar(value);
  }

  setBoardSize(value: string): void {
    this.boardService.updatedBoardsize(parseInt(value));
  }
}
