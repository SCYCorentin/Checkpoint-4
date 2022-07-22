import React from "react";

const links = [
  {
    id: 1,
    url: "/",
    text: "Accueil",
  },
  {
    id: 2,
    url: "/",
    text: "Je trouve mon espace",
  },
  {
    id: 3,
    url: "/Contact",
    text: "Nous contacter",
  },
  {
    id: 4,
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
