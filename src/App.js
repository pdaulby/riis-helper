import React from 'react';
import './App.css';

function App() {
  let card = { 
    action : "Change",
    reversed: {
      action: "Stasis"
    }
  }
  card = random_boolean() ? card : reverseCard(card);
  return (
    <div className="App">
      <header className="App-header">
        <Card card={card}></Card>
      </header>
    </div>
  );
}

function Card(props) {
  return (
  <div className="card-border">
    <div className="card-inner">
      <div className="text-box backwards">{props.card.reversed.action}</div>
      <div className="text-box backwards">{props.card.reversed.social}</div>
      <div className ="art-box"/>
      <div className="text-box">{props.card.social}</div>
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

export default App;
