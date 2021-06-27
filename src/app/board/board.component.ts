import { Component, OnInit } from '@angular/core';
import {Board} from "./board";
import {BoardService} from "./board.service";
import {Card, CardStatus} from "./card";
import {TimingService} from "../timing.service";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {

  cards: Card[][] | undefined;

  constructor(public boardService: BoardService, private timingService: TimingService) {
    this.boardService.cards.subscribe(cards=>this.cards=cards);
    boardService.newGame(6); //TODO: Retrieve from boardService, because sizes are dependant on amount of open cards
  }
}
