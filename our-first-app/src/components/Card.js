import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <h1>{props.ime}</h1>
      <h1>{props.prezime}</h1>
      <h1>{props.godine}</h1>
      <h1>{props.visina}</h1>
    </div>
  );
}

export default Card;
