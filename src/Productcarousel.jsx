import React from "react";


export default function Productcarousel () {

    return(

      <div className="cardParent">
      <img id='card1' src={require('./components/images/accueil1.jpg')} alt="product" />
      <h2 id>Chocolat Lindt</h2>
      <p className="price"> Prix TTC 24€</p>
      <p> Plongez dans un goût sensionnel.</p>
      <p>
      <p id="cardbutton">Découvrir</p>
      </p>
      </div>
      


    )
}
