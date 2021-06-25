import { Injectable } from '@angular/core';
import {CardColor} from "./sidebar/game-settings/cardColor";
import {CardStatus} from "./board/card";

@Injectable({
  providedIn: 'root'
})
export class CardColorService {

  ctrlColors: CardColor[] = [
    { control: CardStatus.inactive, color: "#FF0000" },
    { control: CardStatus.active, color: "#008C00" },
    { control: CardStatus.found, color: "#800080" },
  ];

  constructor() { }
}
