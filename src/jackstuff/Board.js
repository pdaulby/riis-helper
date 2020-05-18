import React, { useState } from 'react';
import './Board.css';
import Deck from './Deck';

function Board(props) {
  let [hand, setHand] = useState([]);
  let [deck, ] = useState(new Deck("test", [1,2,3,4]))
  let addToHand = (item) => setHand(hand.concat(item));
  return (
    <div className="rows table">
      <div className="columns">
        decks
        <div className="rows decks border">
          <Library deck={deck} addToHand={addToHand}/>
        </div>
        <div className="rows board border">
          board
        </div>
      </div>
      <div className="rows hand border">
        hand
        {hand}
      </div>
    </div>);
}

function Library({addToHand, deck}) {
  return (<div className="deck border"
    onClick={() => {addToHand(deck.draw())}} 
>{deck.getName()} {deck.cardsRemaining()}</div>);
}

function Hand({hand}) {

}

export default Board;