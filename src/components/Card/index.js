import React from "react";
import './Card.css'

const Card = (props) => {
  return (
    <div className="card-container">
      <div className="card-avatar-style"></div>
      <h1 className="card-title-style">{props.title}</h1>
      <h3 className="card-reviews-style">{props.review}</h3>
    </div>
  );
};

export default Card;
