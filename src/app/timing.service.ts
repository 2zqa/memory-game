import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {BoardService} from "./board/board.service";

@Injectable({
  providedIn: 'root'
})
export class TimingService {

  readonly PEEK_SECONDS = 5;

  private progressSrc = new BehaviorSubject<number>(this.PEEK_SECONDS);
  progress = this.progressSrc.asObservable();

  intervalID: number = -1;

  constructor() {
  }

  startPeekTimer(closeCards: () => void): void {
    const frame = () => {
      this.progressSrc.next(this.progressSrc.value - 1);

      if (this.progressSrc.value <= 0) {
        clearInterval(this.intervalID);
        closeCards();
        setTimeout(() => this.progressSrc.next(this.PEEK_SECONDS), 500);

      }
    }
    let speed = 1000; // Update-speed in ms. Must be an integer.
    frame();
    this.intervalID = setInterval(frame, speed);
  }

  stopPeekTimer(): void {
    clearTimeout(this.intervalID);
    this.progressSrc.next(this.PEEK_SECONDS);
  }

  reset(): void {
    this.stopPeekTimer();
  }
}
