import React from 'react';
import './App.css';
import redraw from './card-draw.svg';

function Card({card, flip, small}) {
    return (
      <div className={small ? "card-small" : "card-large"}>
      {!flip && <img src={redraw} className="left-img" alt="draw card if advantage/disadvantage"/>}
      {!flip && <img src={redraw} className="right-img" alt="draw card if advantage/disadvantage"/>}
      <div className={"card-border"}>
        <div className="card-inner">
          <div className="text-box backwards">{card.reversed.action}</div>
          <div className={card.reversed.social != null ? "social-box backwards" : "text-box"}>{card.reversed.social}</div>
          <div className="art-box" />
          <div className={card.social != null ? "social-box" : "text-box"}>{card.social}</div>
          <div className="text-box">{card.action}</div>
        </div>
      </div>
      {flip && <img src={redraw} className="left-img-flip" alt="draw card if advantage/disadvantage"/>}
      {flip && <img src={redraw} className="right-img-flip" alt="draw card if advantage/disadvantage"/>}
      </div>);
  }

export default Card;