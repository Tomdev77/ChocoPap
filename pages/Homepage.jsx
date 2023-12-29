import React from "react";
import "../styles/App.css";
import Productcarousel from "../components/Productcarousel";

// import { Panier } from "../components/Button";

export default function Homepage() {
  return (
   <>
        <h1 className="titlehp">CHOCOPAP</h1>
        <a href="/boutique"><h2 className="hpbutt"></h2></a>
      <Productcarousel />
    </>
  );
}
