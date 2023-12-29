
import React, { useState, useEffect } from 'react';
import "../styles/chocolat.css";


export default function Chocolat() {

  const [chocolats, setchocolats] = useState([]);
  const [filtre, setFiltre] = useState('');
  const [prixMin, setPrixMin] = useState('');
  const [prixMax, setPrixMax] = useState('');



  useEffect(() => {
    fetch('data.json')
      .then(response => response.json())
      .then(data => setchocolats(data.chocolats))
      .catch(error => console.log(error))
  }, []);

  const filterText = filtre && typeof filtre === 'string' ? filtre.toLowerCase() : '';
  const chocolat = chocolats.filter((v) => 
      v.title.toLowerCase().includes(filterText)
  );

  const [isFilterActive, setFilteredactive] = useState(false); // This line defines the state variables

  const toggleFilter = () => {
    setFiltre(chocolats);  
    setFilteredactive(prevState => !prevState);  
};
   // Fonction pour le champ texte
   const handleTextFilterChange = (event) => {
    setFiltre(event.target.value);

  };

  const handlePrixMinChange = (e) => {
    setPrixMin(e.target.value);
  };

  const handlePrixMaxChange = (e) => {
    setPrixMax(e.target.value);
  };

  const filteredChocolats = chocolats.filter(v => {
    const price = parseFloat(v.price);
    if (prixMin && prixMax) {
      return price >= parseFloat(prixMin) && price <= parseFloat(prixMax);
    } else if (prixMin) {
      return price >= parseFloat(prixMin);
    } else if (prixMax) {
      return price <= parseFloat(prixMax);
    }
    return true;
  });


  const highRatedChocolats = chocolat.filter(v => v.note > 4);

  

  return (

    <>
    
    <div className="containerForm">
      <h4>Filtre </h4>
      <div className="categoriepanel">

      <input type="text" placeholder="Filtrer par titre..." value={filtre} onChange={handleTextFilterChange} required /><br/>

      <h4>Catégorie </h4>
      
      
      <input type="checkbox"
          id="Panel1form"
          name="ChocolatBlanc"
          onClick={() => toggleFilter("")} />
        <label htmlFor="Panel1form"> Tous les produits</label><br />


      

        <input type="checkbox"
          id="Panel1form"
          name="ChocolatBlanc"
          value="product"

          onClick={() => setFiltre("Blanc Passion")} />
        <label htmlFor="Panel1form"> Chocolat Blanc</label><br />


        <input type="checkbox"
          id="Panel1form"
          name="Chocolat au lait"
          value="product"
          onClick={() => setFiltre("Fantaisie")} />
        <label htmlFor="Panel1form"> Chocolat au lait</label><br />

        <input type="checkbox"
          id="Panel1form"
          name="Chocolat noir"
          value="product"
          onClick={() => setFiltre("Noir Passion")} />
        <label htmlFor="Panel1form"> Chocolat noir</label><br />

        <input type="checkbox"
          id="Panel1form"
          name="Noix/Noisette"
          value="product"
          onClick={() => setFiltre("Douceur croquante")} />
        <label htmlFor="Panel1form"> Noix/Noisette</label><br />

        <input type="checkbox"
          id="Panel1form"
          name="Fruit"
          value="product"
          onClick={() => setFiltre("Coulis Fraise")} />
        <label htmlFor="Panel1form"> Fruit</label><br />

        <input type="checkbox"
          id="Panel1form"
          name="Caramel"
          value="product"
          onClick={() => setFiltre("Caramel Salé")} />
        <label htmlFor="Panel1form"> Caramel</label><br />

        <input type="checkbox"
          id="Panel1form"
          name="Liqueur"
          value="product"
          onClick={() => setFiltre("Douceur exotique")} />
        <label htmlFor="Panel1form"> Liqueur</label><br />

        <h4>Prix </h4>
        <div>
        <input
          type="number"
          placeholder="Prix minimum"
          value={prixMin}
          min="1" max="50" // Adjust max value as per your needs
          onChange={handlePrixMinChange} />
        <p>Prix Min</p>
        <input
          type="number"
          placeholder="Prix maximum"
          value={prixMax}
          min="1" max="50" // Adjust max value as per your needs
          onChange={handlePrixMaxChange} />
        <p>Prix Max</p>
      </div>

      </div>
    </div>

    <article>
  {/* Boucle pour le tableau "chocolat" */}
  {chocolat.map(v => (
    <section key={v.id}>
      <img src={require(`../images/${v.image}`)} alt="imgjson" />
      <h2>{v.title}</h2>
      <p>prix : {v.price} €</p>
      <p>Note clients : {v.note}</p>
      <span>Ajout au panier</span>
    </section>
  ))}

</article>

    </>
  );
}