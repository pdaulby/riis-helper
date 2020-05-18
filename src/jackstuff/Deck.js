import { shuffle } from '../shuffle';

const stringNums = (length) => {
  let digits = length >= 100 ? 3 : length >=10 ? 2 : 1;
  return Array.from(Array(length + 1).keys()).slice(1).map((num) => {
    let s = num + "";
    return s.padStart(digits, '0');
  })
}

class Deck {
    constructor(deckName, locationPath, length){
      this.path = locationPath;
        this.cards = stringNums(length);
        this.name = deckName;
        this.shuffleDeck();
        this.current = this.cards.length
    }

    getName() {
        return this.name;
    }

    getPath() {
      return this.path;
    }

    cardsRemaining() {
        return this.current;
    }

    draw() {
        this.current = this.current - 1;
        return this.cards[this.current];
    }

    shuffleDeck() {
        this.cards = shuffle(this.cards);
        this.current = this.cards.length;
    }
}

export default Deck;