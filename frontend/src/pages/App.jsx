import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import "../styles/home.css";

export default function App() {
  const [coworkings, setCoworkings] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/coworkingplaces/`)
      .then((res) => setCoworkings(res.data))
      .catch((err) => console.warn(err));
  }, []);

  const [text, setText] = useState("");

  return (
    <div>
      <Navbar />
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
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="cardx">
          {coworkings &&
            coworkings
              .filter((coworking) => coworking.name.includes(text))
              .map((coworking, index) => {
                if (index < 10)
                  return (
                    <Card
                      index={coworking}
                      coworking={coworking}
                      key={coworking.id}
                    />
                  );
              })}
        </div>
      </div>
    </div>
  );
}
