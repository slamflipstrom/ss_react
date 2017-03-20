
import React from 'react';

export const CardComponent = (props) => (
  <div className="card" onClick={(evt) => props.handleCurrentCard(evt)}>
    <PointValueComponent pointValue={props.card.id} />
    <CardValueComponent cardValue={props.card.value+"/"+props.card.suit} />
  </div>
)
 
export const CardValueComponent = (props) => (
  <div className="card-value">
    <span>{props.cardValue}</span>
  </div>
)


export const PointValueComponent = (props) => (
  <div className="point-value">
      <span>{props.pointValue}</span> 
  </div>
)