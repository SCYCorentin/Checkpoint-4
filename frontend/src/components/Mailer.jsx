import React, { useState } from "react";
import ContactImage from "../assets/images/contactpage.jpg";
import "../styles/contactform.css";

function ContactForm() {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Envoi en cours...");
    const { name, surname, phone, email, message } = e.target.elements;
    const details = {
      name: name.value,
      surname: surname.value,
      phone: phone.value,
      email: email.value,
      message: message.value,
    };
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/sendEmail/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      }
    );
    setStatus("Submit");
    const result = await response.json();
    alert(result.status);
  };
  return (
    <div className="parentform">
      <img className="contactimg" src={ContactImage} alt={ContactImage} />
      <form onSubmit={handleSubmit}>
        <h1 className="titlecontact">
          Besoin d'une information supplémentaire ?
        </h1>
        <div className="background">
          <div className="containercontact">
            <div className="screen">
              <div className="screen-header">
                <div className="screen-header-left">
                  <div className="screen-header-button minimize" />
                  <div className="screen-header-button minimize" />
                  <div className="screen-header-button minimize" />
                </div>
                <div className="screen-header-right">
                  <div className="screen-header-ellipsis" />
                  <div className="screen-header-ellipsis" />
                  <div className="screen-header-ellipsis" />
                </div>
              </div>
              <div className="screen-body">
                <div className="screen-body-item left">
                  <div className="app-title">
                    <span>Contactez</span>
                    <span>nous</span>
                  </div>
                  <div className="app-contact">
                    Pour nous joindre : 01 76 25 05 06
                  </div>
                </div>
                <div className="screen-body-item">
                  <div className="app-form">
                    <div className="app-form-group">
                      <input
                        className="app-form-control"
                        htmlFor="name"
                        id="name"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div className="app-form-group">
                      <input
                        className="app-form-control"
                        htmlFor="surname"
                        id="surname"
                        placeholder="Votre prénom"
                      />
                    </div>
                    <div className="app-form-group">
                      <input
                        className="app-form-control"
                        htmlFor="email"
                        id="email"
                        placeholder="Votre email"
                      />
                    </div>
                    <div className="app-form-group">
                      <input
                        className="app-form-control"
                        htmlFor="phone"
                        id="phone"
                        placeholder="Numéro de téléphone"
                      />
                    </div>
                    <div className="app-form-group message">
                      <input
                        className="app-form-control"
                        htmlFor="message"
                        id="message"
                        placeholder="Votre message"
                      />
                    </div>
                    <div className="app-form-group buttons">
                      <button className="app-form-button">{status}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
