import {Card} from '../game/card';

export class Board {
  public cards: Card[][] = [];

  constructor(size: number) {
    let nextLetterFunction = this.nextLetter(size);

    for (let y = 0; y < size; y++) {
      this.cards[y] = [];
      for (let x = 0; x < size; x++) {
        this.cards[y][x] = new Card(nextLetterFunction());
        // console.log("added letter: " + this.cards[y][x].letter);
      }
    }
  }

  /**
   * knuth array shuffle
   * from https://bost.ocks.org/mike/shuffle/
   */
  private static shuffle(array: any[]): any[] {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  private nextLetter(size: number): any {
    let letterArray = 'AABBCCDDEEFFGGHHIIJJKKLLMMNNOOPPQQRRSSTTUUVVWWXXYYZZ'.substring(0, size * size).split('');
    let idx = 0;
    letterArray = Board.shuffle(letterArray);
    return () => {
      return letterArray[idx++];
    }
  }

}
