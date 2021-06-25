import {Card, CardStatus} from './card';

export class Board {
  static readonly MAX_OPEN_CARDS = 2;

  cards: Card[][] = [];
  private openCards: Card[] = [];

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

  cardClicked(card: Card) {
    // TODO: timing service
    this.addOpenCard(card);
  }

  private nextLetter(size: number): any {
    let letterArray = 'AABBCCDDEEFFGGHHIIJJKKLLMMNNOOPPQQRRSSTTUUVVWWXXYYZZ'.substring(0, size * size).split('');
    let idx = 0;
    letterArray = Board.shuffle(letterArray);
    return () => {
      return letterArray[idx++];
    }
  }

  private addOpenCard(card: Card): void {
    // Check if card is already in list.
    if(this.openCards.includes(card) || card.status !== CardStatus.inactive) {
      return;
    }

    this.closeCardsAfterLimit();
    this.openCards.push(card);
    card.status = CardStatus.active;

    if (this.openCards.length === Board.MAX_OPEN_CARDS) {
      this.checkCards(this.openCards);
    }
  }

  private closeCardsAfterLimit() {
    if (this.openCards.length >= Board.MAX_OPEN_CARDS) {
      this.setCardsStatus(this.openCards, CardStatus.inactive);
      this.openCards = [];
    }
  }

  /**
   * Marks cards as found if they are equal.
   * From: https://stackoverflow.com/questions/14832603/check-if-all-values-of-array-are-equal
   */
  private checkCards(cards: Card[]): void {
    let areCardsEqual = cards.every( (card, i, cardArray) => card.letter === cardArray[0].letter );
    if (areCardsEqual) {
      this.setCardsStatus(this.openCards, CardStatus.found);
      this.openCards = [];
    }
  }

  private setCardsStatus(cards: Card[], status: CardStatus): void {
    cards.forEach(card => card.status = status);
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
}
