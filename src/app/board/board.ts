import {Card} from '../game/card';

export class Board {
  public cards: Card[][] = [];
  private firstCard: Card | null = null;
  private secondCard: Card | null = null;
  private openCards: number = 0;

  constructor(size: number) {
    let nextLetterFunction = this.nextLetter(size);

    for (let y = 0; y < size; y++) {
      this.cards[y] = [];
      for (let x = 0; x < size; x++) {
        this.cards[y][x] = new Card(nextLetterFunction());
      }
    }
  }

  cardClicked(card: Card) {
    /// checkStarttijd();
    this.checkThirdCard();
    let draaiKaartOm = this.openCard(card);
    /// if (draaiKaartOm == 2) {
    ///   checkKaarten();
    /// }
  }

  checkThirdCard() {
    if (this.firstCard !== null && this.secondCard !== null) {
      // Both cards aren't null, therefore the third card has been clicked
      this.closeCards();
    }
  }

  closeCards() {
    // Cards can only be opened when they are active
    if(this.firstCard !== null) {
      this.firstCard.status = 'inactive';
    }
    if(this.secondCard !== null) {
      this.secondCard.status = 'inactive';
    }
    this.firstCard = null;
    this.secondCard = null;
    this.openCards = 0;
  }

  openCard(card: Card) {
    // Can't click the same card twice
    if (card === this.firstCard) {
      return this.openCards;
    }
    // Cards can be openened only when they are inactive
    if (card.status !== 'inactive') {
      return this.openCards;
    }
    card.status = 'active';
    ///cardComponent.innerHTML = board[card.y][card.x];

    // Set firstCard and secondCard
    if (this.firstCard === null) {
      this.firstCard = card;
    } else if (this.secondCard === null) {
      this.secondCard = card;
    }

    /// stopPeekTimer();
    return ++this.openCards;
  }

  /**
   * knuth array shuffle
   * from https://bost.ocks.org/mike/shuffle/
   */
  private shuffle(array: any[]): any[] {
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
    letterArray = this.shuffle(letterArray);
    return () => {
      return letterArray[idx++];
    }
  }

}
