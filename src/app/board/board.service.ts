import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Card, CardStatus} from "./card";
import {CardColor} from "../sidebar/game-settings/cardColor";
import {Board} from "./board";
import {GameSettingsComponent} from "../sidebar/game-settings/game-settings.component";

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  static readonly MAX_OPEN_CARDS = 2;
  private openCards: Card[] = [];

  private boardSrc = new BehaviorSubject<Board>(new Board(4));
  board = this.boardSrc.asObservable();

  private charSrc = new BehaviorSubject<string>('*');
  char = this.charSrc.asObservable();

  ctrlColors: CardColor[] = [
    { control: CardStatus.inactive, color: "#FF0000" },
    { control: CardStatus.active, color: "#008C00" },
    { control: CardStatus.found, color: "#800080" },
  ];

  constructor() {}

  setNewBoard(size: number) {
    this.boardSrc.next(new Board(size));
  }

  updateChar(char: string){
    this.charSrc.next(char);
  }

  addOpenCard(card: Card): void {
    // Check if card is already in list.
    if(this.openCards.includes(card) || card.status !== CardStatus.inactive) {
      return;
    }

    this.closeCardsAfterLimit();
    this.openCards.push(card);
    card.status = CardStatus.active;

    if (this.openCards.length === BoardService.MAX_OPEN_CARDS) {
      this.checkCards();
    }
  }

  /**
   * Marks cards as found if they are equal.
   * From: https://stackoverflow.com/questions/14832603/check-if-all-values-of-array-are-equal
   */
  private checkCards(): void {
    let areCardsEqual = this.openCards.every( (card, i, cardArray) => card.letter === cardArray[0].letter );
    if (areCardsEqual) {
      this.setOpenCardsStatus(CardStatus.found);
      this.openCards = [];
    }
  }

  private setOpenCardsStatus(status: CardStatus): void {
    this.openCards.forEach(card => card.status = status);
  }

  private closeCardsAfterLimit() {
    if (this.openCards.length >= BoardService.MAX_OPEN_CARDS) {
      this.setOpenCardsStatus(CardStatus.inactive);
      this.openCards = [];
    }
  }
}
