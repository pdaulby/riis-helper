import { shuffle } from '../shuffle';

class Deck {
    constructor(deckName, initialCards){
        this.cards = initialCards;
        this.name = deckName;
        this.shuffleDeck();
        this.current = this.cards.length
    }

    getName() {
        return this.name;
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