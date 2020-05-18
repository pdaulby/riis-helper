import React, { useState } from 'react';
import './Board.css';
import Deck from './Deck';

function Board(props) {
  let [hand, setHand] = useState([]);
  let [deck, ] = useState(new Deck("Enemy Deck", "./Enemy/enemy_", 61))
  let addToHand = (item) => item && setHand(hand.concat(item));
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
        <Hand hand={hand} />
      </div>
    </div>);
}

function Library({addToHand, deck}) {
  return (<div className="card border"
    onClick={() => {addToHand(deck.getPath() + deck.draw() + ".jpg")}} 
>{deck.getName()}. <p/> Cards Remaining: {deck.cardsRemaining()}</div>);
}

function Hand({hand}) {
  return (<>
    {hand.map(location => (<img className="card" src={require(`${location}`)} />))}
  </>)
}


export default Board;