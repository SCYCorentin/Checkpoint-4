import React from "react";

function Cards({ coworking }) {
  return (
    <div className="cardsAdoption">
      <h2>{coworking.name}</h2>{" "}
      <button type="button" className="buttonAdoption">
        <p>Take that !</p>
      </button>
    </div>
  );
}

export default Cards;
