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

  private boardSrc = new BehaviorSubject<Board>(new Board(4));
  board = this.boardSrc.asObservable();

  private charSrc = new BehaviorSubject<string>('*');
  char = this.charSrc.asObservable();

  constructor() {}

  setNewBoard(size: number) {
    this.boardSrc.next(new Board(size));
  }

  updateChar(char: string){
    this.charSrc.next(char);
  }
}
