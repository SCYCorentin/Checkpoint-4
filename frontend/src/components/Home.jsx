import React from "react";
import "../styles/home.css";

function Home() {
  return (
    <div className="fullhome">
      <h1 className="home">
        Trouver un espace de coworking professionnel deviens{" "}
        <span className="h1color">simple et rapide !</span>
      </h1>
      <div className="searching">
        <input
          className="searchinput"
          placeholder="Je recherche un espace"
          type="text"
          // onChange={(e) => setText(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Home;
