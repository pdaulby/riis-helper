import React, { useState }  from 'react';
import './App.css';
import Cards from './Cards.js'

const DrawType = {
  MAJOR_DISADVANTAGE: "Major Disadvantage",
  DISADVANTAGE: "Disadvantage",
  NORMAL: "Normal",
  ADVANTAGE: "Advantage",
  MAJOR_ADVANTAGE: "Major Advantage",
}

function App() {
  const [cards, setCards] = useState(shuffle(Cards()));
  const [num, setNum] = useState(cards.length);
  const [drawType, setDrawType] = useState(DrawType.NORMAL);
  const [showPrevious, setShowPrevious] = useState(0);
  let flip = random_boolean();
  let getCard = () => flip ? cards[num] : reverseCard(cards[num]);
  return (
    <div className="App">
      <header className="App-header">
        {num===cards.length ? <div/> 
        : drawType===DrawType.NORMAL 
          ? <Card card={getCard()}/> 
          : <MultiCard cards={cards} num={num} drawType={drawType} showPrevious={showPrevious}></MultiCard>}
        
        {num < 2 
          ? <button onClick={() => { setCards(shuffle(cards)); setNum(cards.length); setShowPrevious(0); }}>Shuffle</button>
          : <div>
              <button onClick={() => { setNum(num-1); setShowPrevious(0); setDrawType(DrawType.NORMAL); }}>Draw a Card</button>
              <AdvantageButton drawType={DrawType.ADVANTAGE} num={num} setNum={setNum} setShowPrevious={setShowPrevious} setDrawType={setDrawType}/>
              <AdvantageButton drawType={DrawType.MAJOR_ADVANTAGE} num={num} setNum={setNum} setShowPrevious={setShowPrevious} setDrawType={setDrawType}/>
              <AdvantageButton drawType={DrawType.DISADVANTAGE} num={num} setNum={setNum} setShowPrevious={setShowPrevious} setDrawType={setDrawType}/>
              <AdvantageButton drawType={DrawType.MAJOR_DISADVANTAGE} num={num} setNum={setNum} setShowPrevious={setShowPrevious} setDrawType={setDrawType}/>
            </div>
          }
      </header>
    </div>
  );
}

function AdvantageButton(props) {
  return (
  <button onClick={() => { 
    props.setDrawType(props.drawType)
    if (random_boolean()) 
    {
      if ((props.drawType===DrawType.MAJOR_ADVANTAGE || props.drawType===DrawType.MAJOR_DISADVANTAGE) && random_boolean()){
        props.setNum(props.num-3); props.setShowPrevious(2);
      }
      else {props.setNum(props.num-2); props.setShowPrevious(1);}
    } 
    else 
    {
      props.setNum(props.num-1); props.setShowPrevious(0);
    } 
    }}>Draw with {props.drawType}</button>
  )
}

function Card(props) {
  return (
  <div className={props.small ? "card-border-small" : "card-border-large"}>
    <div className="card-inner">
      <div className="text-box backwards">{props.card.reversed.action}</div>
      <div className={props.card.reversed.social != null ? "social-box backwards" : "text-box"}>{props.card.reversed.social}</div>
      <div className ="art-box"/>
      <div className={props.card.social != null ? "social-box" : "text-box"}>{props.card.social}</div>
      <div className="text-box">{props.card.action}</div>
    </div>
  </div>);
}

function MultiCard(props) {
  let major = props.drawType === DrawType.MAJOR_ADVANTAGE || props.drawType === DrawType.MAJOR_DISADVANTAGE;
  let showChooseText = props.showPrevious === 0  ||  (major && props.showPrevious === 1);
  let bestWorst = (props.drawType === DrawType.ADVANTAGE || props.drawType===DrawType.MAJOR_ADVANTAGE) ? "best" : "worst";
  return (
    <div>
    {props.showPrevious===2 ? <Card card={props.cards[props.num + 2]} small={true}/> : <div/>}
    {props.showPrevious>0 ? <Card card={props.cards[props.num + 1]} small={true}/> : <div/>}
    <Card card={props.cards[props.num]}/>
  {showChooseText ? <div> <Card card={reverseCard(props.cards[props.num])} small={true} /><div>Choose the {bestWorst} of the options from the card</div></div> : <div/>}
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

export default App;
