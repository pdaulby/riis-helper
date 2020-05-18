import React from 'react';
import './App.css';
import redraw from './card-draw.svg';

function Card(props) {
    return (
      <div className={props.small ? "card-small" : "card-large"}>
      {!props.flip && <img src={redraw} className="cornered" alt="draw card if advantage/disadvantage"/>}
      <div className={"card-border"}>
        <div className="card-inner">
          <div className="text-box backwards">{props.card.reversed.action}</div>
          <div className={props.card.reversed.social != null ? "social-box backwards" : "text-box"}>{props.card.reversed.social}</div>
          <div className="art-box" />
          <div className={props.card.social != null ? "social-box" : "text-box"}>{props.card.social}</div>
          <div className="text-box">{props.card.action}</div>
        </div>
      </div>
      {props.flip && <img src={redraw} className="flip-cornered" alt="draw card if advantage/disadvantage"/>}
      </div>);
  }

export default Card;