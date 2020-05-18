import React, { useState } from 'react';
import './App.css';
import Cards from './Cards.js'
import Card from './Card.js'

const DrawType = {
  MAJOR_DISADVANTAGE: "Major Disadvantage",
  DISADVANTAGE: "Disadvantage",
  NORMAL: "Normal",
  ADVANTAGE: "Advantage",
  MAJOR_ADVANTAGE: "Major Advantage",
}

function DrawHelper() {
  const [cards, setCards] = useState(shuffle(Cards()));
  const [num, setNum] = useState(cards.length);
  const [drawType, setDrawType] = useState(DrawType.NORMAL);
  const [showPrevious, setShowPrevious] = useState(0);
  let flip = random_boolean();
  let getCard = () => flip ? cards[num] : reverseCard(cards[num]);
  return (
    <div className="App">
      <header className="App-header">
        {num === cards.length ? <div />
          : drawType === DrawType.NORMAL
            ? <Card flip={flip} card={getCard()} />
            : <MultiCard flip={flip} cards={cards} num={num} drawType={drawType} showPrevious={showPrevious}></MultiCard>}

        {num < 2
          ? <button onClick={() => { setCards(shuffle(cards)); setNum(cards.length); setShowPrevious(0); }}>Shuffle</button>
          : <div className="buttons">
            <button onClick={() => { setNum(num - 1); setShowPrevious(0); setDrawType(DrawType.NORMAL); }}>Draw a Card</button>
            <AdvantageButton drawType={DrawType.ADVANTAGE} num={num} setNum={setNum} setShowPrevious={setShowPrevious} setDrawType={setDrawType} />
            <AdvantageButton drawType={DrawType.MAJOR_ADVANTAGE} num={num} setNum={setNum} setShowPrevious={setShowPrevious} setDrawType={setDrawType} />
            <AdvantageButton drawType={DrawType.DISADVANTAGE} num={num} setNum={setNum} setShowPrevious={setShowPrevious} setDrawType={setDrawType} />
            <AdvantageButton drawType={DrawType.MAJOR_DISADVANTAGE} num={num} setNum={setNum} setShowPrevious={setShowPrevious} setDrawType={setDrawType} />
          </div>
        }
      </header>
    </div>
  );
}

function AdvantageButton(props) {
  return (
    <button className="advantage-button" onClick={() => {
      props.setDrawType(props.drawType)
      if (random_boolean()) {
        if ((props.drawType === DrawType.MAJOR_ADVANTAGE || props.drawType === DrawType.MAJOR_DISADVANTAGE) && random_boolean()) {
          props.setNum(props.num - 3); props.setShowPrevious(2);
        }
        else { props.setNum(props.num - 2); props.setShowPrevious(1); }
      }
      else {
        props.setNum(props.num - 1); props.setShowPrevious(0);
      }
    }}>Draw with {props.drawType}</button>
  )
}

function MultiCard(props) {
  let major = props.drawType === DrawType.MAJOR_ADVANTAGE || props.drawType === DrawType.MAJOR_DISADVANTAGE;
  let showChooseText = props.showPrevious === 0 || (major && props.showPrevious === 1);
  let bestWorst = (props.drawType === DrawType.ADVANTAGE || props.drawType === DrawType.MAJOR_ADVANTAGE) ? "best" : "worst";
  return (
    <div>
      <div className="top-cards">
        {props.showPrevious > 0 && <div>discarded cards<p/></div>}
        {props.showPrevious === 2 && <Card card={props.cards[props.num + 2]} small={true} />}
        {props.showPrevious > 0 && <Card card={props.cards[props.num + 1]} small={true} />}
      </div>
      <div className="show-reverse">
        <Card flip={props.flip} card={props.cards[props.num]} />
        {showChooseText && <Card flip={!props.flip} card={reverseCard(props.cards[props.num])}/>}
      </div>
        {showChooseText && <div>Choose the {bestWorst} of the options from the card</div>}
    </div>
  );
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

export default DrawHelper;
