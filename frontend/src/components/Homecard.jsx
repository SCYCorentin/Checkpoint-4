import React from "react";
import "../styles/cardhome.css";

function Homecard() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card card-1">
            <h3>Recherchez</h3>
            <p>
              Trouvez l'espace de travail idéal parmi des milliers d'espaces de
              coworking, de salles de réunion atypiques ou de bureaux. Les
              filtres de recherche et la disponibilité en temps réel vous
              facilitent la vie !
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-2">
            <h3>Réservez</h3>
            <p>
              Réservation simple et rapide en 3 clics. Payez en ligne et recevez
              une confirmation par email. Notre application mobile permet de
              réserver à la dernière minute pendant vos déplacements
              professionnels.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-3">
            <h3>Travaillez</h3>
            <p>
              Rendez vous dans l’espace de coworking ou la salle de réunion que
              vous avez réservé. Seul ou en équipe travailler n’a jamais été
              aussi facile. Avec un suivi complet, Corsair est la réference du
              domaine !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homecard;
