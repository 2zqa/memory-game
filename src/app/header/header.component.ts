import {Component, OnInit} from '@angular/core';
import {TimingService} from "../timing.service";
import {BoardService} from "../board/board.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  elapsedTime = 0;
  peekTimeRemaining = 10;
  foundCardPairs = 0;

  constructor(public timingService: TimingService, private boardService: BoardService) {
    timingService.peekTimeRemaining.subscribe(peekTimeRemaining => this.peekTimeRemaining = peekTimeRemaining);
    timingService.elapsedTime.subscribe(elapsedTime => this.elapsedTime = elapsedTime);
    boardService.foundCardPairs.subscribe(foundCardPairs => this.foundCardPairs = foundCardPairs);
  }

  ngOnInit(): void {
  }

}
