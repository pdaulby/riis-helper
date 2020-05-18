import React, { useState } from 'react';
import './App.css';
import Cards from './Cards.js'
import Card from './Card.js'
import { shuffle } from './shuffle';

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

function AdvantageButton({setDrawType, drawType, setNum, num, setShowPrevious}) {
  return (
    <button className="advantage-button" onClick={() => {
      setDrawType(drawType)
      if (random_boolean()) {
        if ((drawType === DrawType.MAJOR_ADVANTAGE || drawType === DrawType.MAJOR_DISADVANTAGE) && random_boolean()) {
          setNum(num - 3); setShowPrevious(2);
        }
        else { setNum(num - 2); setShowPrevious(1); }
      }
      else {
        setNum(num - 1); setShowPrevious(0);
      }
    }}>Draw with {drawType}</button>
  )
}

function MultiCard({drawType, showPrevious, cards, num, flip}) {
  let major = drawType === DrawType.MAJOR_ADVANTAGE || drawType === DrawType.MAJOR_DISADVANTAGE;
  let showChooseText = showPrevious === 0 || (major && showPrevious === 1);
  let bestWorst = (drawType === DrawType.ADVANTAGE || drawType === DrawType.MAJOR_ADVANTAGE) ? "best" : "worst";
  return (
    <div>
      <div className="top-cards">
        {showPrevious > 0 && <div>discarded cards<p/></div>}
        {showPrevious === 2 && <Card card={cards[num + 2]} small={true} />}
        {showPrevious > 0 && <Card card={cards[num + 1]} small={true} />}
      </div>
      <div className="show-reverse">
        <Card flip={flip} card={cards[num]} />
        {showChooseText && <Card flip={!flip} card={reverseCard(cards[num])}/>}
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

export default DrawHelper;
