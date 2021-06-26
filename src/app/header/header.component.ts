import {Component, OnInit} from '@angular/core';
import {TimingService} from "../timing.service";
import {BoardService} from "../board/board.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  time = 0;
  progress = 10;
  foundCardPairs = 0;

  constructor(public timingService: TimingService, private boardService: BoardService) {
    timingService.progress.subscribe(progress => this.progress = progress);
    boardService.foundCardPairs.subscribe(foundCardPairs => this.foundCardPairs = foundCardPairs);
  }

  ngOnInit(): void {
  }

}
