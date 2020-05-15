import React from 'react';
import './App.css';
import redraw from './card-draw.svg';

function Card(props) {
    return (
      <div className={props.small ? "card-small" : "card-large"}>
      <img src={redraw} className="cornered"/>
      <div className={"card-border"}>
        <div className="card-inner">
          <div className="text-box backwards">{props.card.reversed.action}</div>
          <div className={props.card.reversed.social != null ? "social-box backwards" : "text-box"}>{props.card.reversed.social}</div>
          <div className="art-box" />
          <div className={props.card.social != null ? "social-box" : "text-box"}>{props.card.social}</div>
          <div className="text-box">{props.card.action}</div>
        </div>
      </div>
      </div>);
  }

export default Card;