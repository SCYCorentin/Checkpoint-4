import React, { useState, useRef, useEffect } from "react";
import {
  FaBars,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaBehance,
} from "react-icons/fa";
import Logo from "../assets/images/logo.png";
import NavLinks from "./NavLinks";
import "../styles/navbar.css";

const socialLinks = [
  {
    id: 1,
    url: "https://www.twitter.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.twitter.com",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.twitter.com",
    icon: <FaBehance />,
  },
];

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  // for the links-container
  const linksContainerRef = useRef(null);
  // for the nav-links
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img className="Logo" src={Logo} alt={Logo} />
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>

        <div ref={linksContainerRef} className="links-container">
          <ul ref={linksRef} className="links">
            <NavLinks />
          </ul>
        </div>

        <ul className="social-icons">
          {socialLinks.map((item) => (
            <li key={item.id}>
              <a href={item.url}>{item.icon}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
