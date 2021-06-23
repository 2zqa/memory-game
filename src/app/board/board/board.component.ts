import { Component, OnInit } from '@angular/core';
import {Board} from "../board";
import {BoardService} from "../board.service";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {

  constructor(private boardService: BoardService) {
  }

  board = new Board(4);

}
