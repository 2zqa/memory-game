import {Component, Input, OnInit} from '@angular/core';
import {Card} from "../card";
import {BoardService} from "../board.service";
import { CardStatus } from "../card";
import {CardColorService} from "../../card-color.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  public CardStatus = CardStatus;
  @Input() card!: Card;
  inactiveCardChar: string = '';
  ctrlColors =  this.colorService.ctrlColors;

  constructor(private boardService: BoardService, private colorService: CardColorService) {
    this.boardService.char.subscribe(char => this.inactiveCardChar = char);
  }

}
