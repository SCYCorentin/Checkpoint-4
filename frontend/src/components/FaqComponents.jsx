import React from "react";
import Question from "./Questions";
import faqs from "../assets/dataset/faq";
import image1 from "../assets/images/illustration-box-desktop.svg";
import image3 from "../assets/images/illustration-woman-online-desktop.svg";

import "../styles/faq.css";

export default function App() {
  return (
    <div>
      <h1 className="contactfaq">
        Une question ? Trop simple pour nous contacter !
      </h1>
      <div className="container2">
        <img
          className="interactive-box-image"
          id="interactive-box-image"
          src={image1}
          alt="true"
          aria-hidden="true"
        />
        <section className="faq">
          <div className="faq__left">
            <picture className="faq__picture">
              <source src={image1} media="(max-width: 992px)" />
              <img
                className="mobile3"
                src={image3}
                alt="true"
                aria-hidden="true"
              />
            </picture>
          </div>

          <div className="faq__right">
            <h1 className="faq__heading">FAQ</h1>
            <dl>
              {faqs.map((faq, index) => (
                <Question
                  index={index}
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </dl>
          </div>
        </section>
      </div>
    </div>
  );
}
