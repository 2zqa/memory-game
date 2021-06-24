import { Component, OnInit } from '@angular/core';
import {Board} from "./board";
import {BoardService} from "./board.service";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {

  board: Board | undefined;

  constructor(private boardService: BoardService) {
    this.boardService.board.subscribe(value => this.board = value);
  }
}
