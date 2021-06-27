import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Highscore} from "./highscore";

@Injectable({
  providedIn: 'root'
})
export class HighscoreService {

  static readonly TOPSCORES_COUNT = 5;
  private highscoresSrc = new BehaviorSubject<Highscore[]>([
    { name: "Barack Obama", time: 200 },
    { name: "Bernie Sanders", time: 300 },
    { name: "Hillary Clinton", time: 400 },
    { name: "Jeb Bush", time: 500 },
    { name: "Donald Trump", time: 600 }
  ]);
  highscores = this. highscoresSrc.asObservable();

  private averageTimeSrc = new BehaviorSubject<number>(-1);
  averageTime = this.averageTimeSrc.asObservable();

  private times: number[] = this.highscoresSrc.value.map(entry => entry.time);


  constructor() {
    this.updateAverage();
  }

  addNewTime(time: number) {
    this.times.push(time);
    this.updateAverage();

    let highscores = this.highscoresSrc.value;
    if(highscores.length < HighscoreService.TOPSCORES_COUNT || time < highscores[HighscoreService.TOPSCORES_COUNT-1].time) {
      let name = prompt(`Congratulations, you won! Your time: ${time} seconds\nEnter your name:`);
      if(name === null || name === "") {
        name = "Anonymous";
      }
      highscores.push({ name: name, time: time});
      highscores.sort((entry1, entry2) => entry1.time - entry2.time);
      highscores = highscores.slice(0, HighscoreService.TOPSCORES_COUNT);
      this.highscoresSrc.next(highscores);
    } else {
      alert(`Congratulations, you won! Your time: ${time} seconds`);
    }
  }

  private updateAverage(): void {
    let sum = 0;
    for(let time of this.times) {
      sum += time;
    }
    this.averageTimeSrc.next(sum/this.times.length);
  }
}
