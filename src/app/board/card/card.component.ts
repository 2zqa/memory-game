import {Component, Input} from '@angular/core';
import {Card} from "../../game/card";
import {BoardService} from "../board.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() cardValue = '';
  card: Card = new Card(this.cardValue);
  inactiveCardChar: string = '';

  constructor(private boardService: BoardService) {
    this.boardService.char.subscribe(char => this.inactiveCardChar = char);
  }

}
