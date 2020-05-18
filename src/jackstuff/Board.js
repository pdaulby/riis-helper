import React, { useState } from 'react';
import './Board.css';
import Deck from './Deck';

function Board(props) {
  let [hand, setHand] = useState([]);
  let [enemyDeck,] = useState(new Deck("Enemy Deck", "./Enemy/enemy_", 61))
  let [armourDeck,] = useState(new Deck("Armour Deck", "./Armour/Armourjpg_", 120))
  let addToHand = (item) => item && setHand(hand.concat(item));
  let removeFromHand = (value) => setHand(hand.filter(item => item !== value));
  return (
    <div className="rows table">
      <div className="columns">
        decks
        <div className="rows decks border">
          <Library deck={enemyDeck} addToHand={addToHand} />
          <Library deck={armourDeck} addToHand={addToHand} />
        </div>
        hand
        <div className="rows hand border">
          <Hand hand={hand} removeFromHand={removeFromHand} />
        </div>
          board
        <div className="rows board border">
        </div>
      </div>
    </div>);
}

function Library({ addToHand, deck }) {
  return (<div className="deck border"
    onClick={() => { addToHand(deck.getPath() + deck.draw() + ".jpg") }}
  ><p />{deck.getName()}.<p /> Cards Remaining: {deck.cardsRemaining()}</div>);
}

function Hand({ hand, removeFromHand }) {
  return (<>
    {hand.map(location => (<img className="card" src={require(`${location}`)} onClick={() => removeFromHand(location)} />))}
  </>)
}

function Card({ location }) {
  return (<img className="card" src={require(`${location}`)} />);
}


export default Board;