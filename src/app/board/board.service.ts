import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private charSrc = new BehaviorSubject<string>('*');
  char = this.charSrc.asObservable();

  constructor() { }

  updatedChar(char: string){
    this.charSrc.next(char);
  }
}
