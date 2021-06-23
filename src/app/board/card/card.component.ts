import {Component, Input, OnInit} from '@angular/core';
import {Card} from "../../game/card";
import {BoardService} from "../board.service";
import { CardStatus } from "../../game/card";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public CardStatus = CardStatus;
  @Input() card: Card | undefined;
  inactiveCardChar: string = '';

  constructor(private boardService: BoardService) {}

  ngOnInit() {
    if(!(this.card instanceof Card)) {
      alert("Sorry, the game is broken. Please report this to the developers");
      console.error("Error: card is undefined, this shouldn't have happened. Type in reality: "+ typeof this.card);
    }
    this.boardService.char.subscribe(char => this.inactiveCardChar = char);
  }

  cardClicked() {
    if(!(this.card instanceof Card)) {
      return; // This should never happen, but just to make the compiler happy
    }
    // TODO: timing service
    this.boardService.addOpenCard(this.card);
  }

}
