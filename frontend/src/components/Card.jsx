import React from "react";
import "../styles/card.css";

function Cards({ coworking }) {
  return (
    <div className="blog_post">
      <div className="container_copy">
        <h3 className="hh3">{coworking.cityplace}</h3>
        <h1 className="hh1">{coworking.name}</h1>
        <p className="pp">{coworking.services}</p>
        <p className="pp">{coworking.hoursopen}</p>
        <button className="btn_primary" href="#" target="_blank">
          Je reserve !
        </button>
      </div>
    </div>
  );
}

export default Cards;
