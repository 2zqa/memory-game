import { Component, OnInit } from '@angular/core';
import {Board} from "../board";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  board = new Board(3);

}
