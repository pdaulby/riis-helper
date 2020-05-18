import { shuffle } from '../shuffle';

class Deck {
    constructor(name, initialCards){
        this.cards = initialCards;
        this.name = name;
        shuffleDeck();
        this.current = this.cards.length
    }

    get name() {
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