import React, { useState } from 'react';
import './Board.css';
import Deck from './Deck';
import DropdownWrapper from "react-dropdown-wrapper";

function Board(props) {
  let [hand, setHand] = useState([]);
  let addToHand = (item) => item && setHand(hand.concat(item));
  let removeFromHand = (value) => setHand(hand.filter(item => item !== value));

  let [board, setBoard] = useState([]);
  let addToBoard = (item) => item && setBoard(board.concat(item));
  let removeFromBoard = (value) => setBoard(board.filter(item => item !== value));
  let [randomNumber, setRandomNumber] = useState(100);

  let [enemyDeck,] = useState(new Deck("Enemy Deck", "./Enemy/enemy_", 61));
  let [costOfWarDeck,] = useState(new Deck("Cost of War Deck", "./CostOfWar/costofwar_", 61));
  let [armourDeck,] = useState(new Deck("Armour Deck", "./Armour/Armourjpg_", 120));
  let [itemDeck,] = useState(new Deck("Item Deck", "./Item/item_", 69));
  let [locationDeck,] = useState(new Deck("Location Deck", "./Location/location_", 60));
  let [weaponDeck,] = useState(new Deck("Weapon Deck", "./Weapon/weapon_", 60));

  return (
    <div className="rows table">
      <div className="columns">
        decks
        <div className="rows decks border">
          <Libraries addToHand={addToBoard} decks={[enemyDeck, costOfWarDeck, armourDeck, itemDeck, locationDeck, weaponDeck]} />
          <div><button onClick={() => setRandomNumber(Math.floor(Math.random() * 100) + 1)} >Roll D100</button> <p />{randomNumber}</div>
        </div>
        hand
        <div className="rows hand border">
          <Zone cards={hand} removeFromZone={removeFromHand} addToBoard={addToBoard} />
        </div>
        board
        <div className="rows board border">
          <Zone cards={board} removeFromZone={removeFromBoard} addToHand={addToHand} />
        </div>
      </div>
    </div>);
}

function Libraries({ addToHand, decks }) {
  return (<>
    {decks.map(deck => <Library deck={deck} addToHand={addToHand} />)}
  </>)
}

function Library({ addToHand, deck }) {
  return (<div className="deck border"
    onClick={() => { addToHand(deck.getPath() + deck.draw() + ".jpg") }}
  ><p />{deck.getName()}.<p /> Cards Remaining: {deck.cardsRemaining()}</div>);
}

function Zone({ cards, removeFromZone, addToHand, addToBoard }) {
  return (<>
    {cards.map(location => (<Card location={location} removeFromZone={removeFromZone} addToHand={addToHand} addToBoard={addToBoard} />))}
  </>)
}

function Card({ location, removeFromZone, addToHand, addToBoard }) {
  return (
    <DropdownWrapper>
      {({ changeStatus, isShow }) => (
        <div className="card relative columns">
          <img className="card" alt=""
           onClick={() => changeStatus(!isShow)} 
           src={require(`${location}`)} />
          
          {isShow && <div className="dropdown columns">
            <button className="dropdown-button" onClick={() => removeFromZone(location)}>Discard</button>
            {addToHand && <button className="dropdown-button" 
              onClick={() => {addToHand(location); removeFromZone(location);}}>Move To Hand</button>}
            {addToBoard && <button className="dropdown-button" 
              onClick={() => {addToBoard(location); removeFromZone(location);}}>Move To Board</button>}
          </div>}
        </div>
      )}
    </DropdownWrapper>);
}


export default Board;