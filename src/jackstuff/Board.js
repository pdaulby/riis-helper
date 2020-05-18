import React, { useState } from 'react';
import './Board.css';
import Deck from './Deck';

function Board(props) {
  let [hand, setHand] = useState([]);
  let [deck, setDeck] = useState(new Deck("test", [1,2,3,4]))
  let addToHand = (item) => setHand(hand.concat(item));
  return (
    <div className="columns table">
      <div className="rows">
        <div className="columns decks">
          <Library deck={deck} addToHand={addToHand}/>
        </div>
        <div className="columns board">
          board
        </div>
      </div>
      <div className="columns hand">
        {hand}
      </div>
    </div>);
}

function Library({addToHand, deck}){
  return (<div className="deck"
    onClick={() => {addToHand(deck.draw())}} 
    >{deck.getName()}</div>);
}

export default Board;