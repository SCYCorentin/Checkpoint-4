import React from "react";

const links = [
  {
    id: 1,
    url: "/",
    text: "Accueil",
  },

  {
    id: 2,
    url: "/Where",
    text: "Je trouve mon espace",
  },
  {
    id: 3,
    url: "/Who",
    text: "Qui sommes nous ?",
  },
  {
    id: 4,
    url: "/Contact",
    text: "Nous contacter",
  },
  {
    id: 5,
    url: "/Faq",
    text: "FAQ",
  },
];

function NavLinks() {
  return (
    <>
      {links.map((item) => (
        <li key={item.id}>
          <a href={item.url}>{item.text}</a>
        </li>
      ))}
    </>
  );
}

export default NavLinks;
