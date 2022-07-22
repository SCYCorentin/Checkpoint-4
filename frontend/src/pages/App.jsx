import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Homecard from "../components/Homecard";
import homeimg from "../assets/images/homedrop.jpg";
import homeimg3 from "../assets/images/home3.png";
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
  const [filter, setFilter] = useState("");

  return (
    <div>
      <Navbar />
      <div className="fullhome">
        <div className="desktopdiv">
          <h1 className="home">
            Trouver un espace de coworking professionnel deviens
            <span className="h1color">&nbsp;simple et rapide !</span>
          </h1>
        </div>
        <div className="home2">
          <img className="homeimg2" src={homeimg3} alt={homeimg} />
          <div className="home3">
            <h1 className="titlehome3">
              Avec Corsair, tout deviens si simple...
            </h1>
            <Homecard />
          </div>
        </div>
        <div className="mobileimg">
          <img className="homeimg" src={homeimg} alt={homeimg} />
        </div>
        <div className="searching">
          <input
            className="searchinput"
            placeholder="Je recherche un espace"
            type="text"
            onChange={(e) => setText(e.target.value)}
          />
          <input
            className="searchinput2"
            placeholder="Je recherche un service"
            type="text"
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
        <div className="cardx">
          {coworkings &&
            coworkings
              .filter((coworking) => coworking.name.includes(text))
              .filter((coworking) => coworking.services.includes(filter))
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
      <Footer />
    </div>
  );
}
