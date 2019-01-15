import React from 'react';
import { Image } from 'react-bootstrap';
import './cards.css'

const Card = props => (
  <Image
    className="card"
    src={props.image}
    thumbnail
    alt={props.id}
    onClick={() => props.handleClick(props.id)}
  />
);

export default Card;
