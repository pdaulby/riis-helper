import React, { useState }  from 'react';
import './App.css';
import Cards from './Cards.js'

function App() {
  let cards = Cards();
  cards = shuffle(cards);
  const [num, setNum] = useState(cards.length - 1);
  return (
    <div className="App">
      <header className="App-header">
        <Card card={random_boolean() ? cards[num] : reverseCard(cards[num])}></Card>
        {
          num > 2 
          ? <button onClick={() => {setNum(num-1)}}>Next Card</button>
          : <button onClick={() => {cards = shuffle(cards); setNum(cards.length-1)}}>Shuffle then Draw</button>
        }
      </header>
    </div>
  );
}

function Card(props) {
  return (
  <div className="card-border">
    <div className="card-inner">
      <div className="text-box backwards">{props.card.reversed.action}</div>
      <div className={props.card.reversed.social != null ? "social-box backwards" : "text-box backwards"}>{props.card.reversed.social}</div>
      <div className ="art-box"/>
      <div className={props.card.social != null ? "social-box" : "text-box"}>{props.card.social}</div>
      <div className="text-box">{props.card.action}</div>
    </div>
  </div>);
}

const reverseCard = (card) => {
  return {
    action: card.reversed.action,
    social: card.reversed.social,
    reversed: {
      action: card.action,
      social: card.social
    }
  }
}

const random_boolean = () => Math.random() >= 0.5;

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

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

export default App;
