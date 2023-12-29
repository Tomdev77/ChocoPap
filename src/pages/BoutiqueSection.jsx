import React, { useEffect, useState } from "react";
import "../styles/Boutique.css";
import "../styles/chocolat.css";
import  ListeChocolats from "../pages/pageficheproduitjson";
import  ChocolateFilter from "../components/ChocolatFilter";
// import { Panier } from "../components/Button";

export default function BoutiqueSection() {
    return (
     <>
          <h1 className="titleBoutiquesection">BOUTIQUE</h1>
          <article />
        <ListeChocolats />        
      </>
    );
  }
  