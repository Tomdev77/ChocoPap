import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
// import "../styles/Bootstrap.css";

function Navbar() {
  const [showLinks, setshowLinks] = useState(false); // menu fermer par défault

  const handleShowLinks = () => {
    setshowLinks(!showLinks); // activation du sholinks si true sinon false
  };

  const [color, setColor] = useState(false); // changer couleur au scroll de la navbar

  const changeColor = () => {
    setColor(window.scrollY >= 90);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeColor);
    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);


  return (
    <nav className={color ? 'fixed navbar navbar-bg' : 'fixed navbar'}>
    <nav className={`fixed navbar ${showLinks ? "show-nav" : "hide-nav"} `}>
      <div className="navbar_logo ">
        <img
          id="logomenucoverdesktop"
          src={require("../images/logo.png")}
          alt="logomobilecover"
        />
      </div>
      <ul className="navbar_links">
        <li className="navbar_item slideInDown-1">
          <a href="/" className="navbar_link">
            Accueil
          </a>
        </li>
        <li className="navbar_item slideInDown-2">
          <a href="/boutique" className="navbar_link">
            Boutique
          </a>
        </li>
        <li className="navbar_item slideInDown-3">
          <a href="/" className="navbar_link">
            Panier
          </a>
        </li>
        <li className="navbar_item slideInDown-4">
          <img
            id="logomenucovermobile"
            src={require("../images/logo.png")}
            alt="logomobilecover"
          />
        </li>
        <li className="navbar_item">
          <img id="panier" src={require("../images/panier.png")} alt="panier" />
        </li>
      </ul>
      <button className="navbar_burger"></button>
      <div className="burger-bar" onClick={handleShowLinks}></div>
      </nav></nav>
  );
}

export default Navbar;
