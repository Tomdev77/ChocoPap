import React, { useState, useEffect } from 'react';

function ChocolateFilter() {
  const [chocolats, setChocolats] = useState([]);
  const [prixMin, setPrixMin] = useState('');
  const [prixMax, setPrixMax] = useState('');


  useEffect(() => {
    fetch('data.json')
      .then(response => response.json())
      .then(data => setChocolats(data.chocolats))
      .catch(error => console.log(error))
  }, []);


  const handlePrixMinChange = (e) => {
    setPrixMin(e.target.value);
  };

  const handlePrixMaxChange = (e) => {
    setPrixMax(e.target.value);
  };

  const filteredChocolats = chocolats.filter(chocolat => {
    const price = parseFloat(chocolat.price);
    if (prixMin && prixMax) {
      return price >= parseFloat(prixMin) && price <= parseFloat(prixMax);
    } else if (prixMin) {
      return price >= parseFloat(prixMin);
    } else if (prixMax) {
      return price <= parseFloat(prixMax);
    }
    return true;
  });

  return (
    <>
      <div>
        <input
          type="number"
          placeholder="Prix minimum"
          value={prixMin}
          min="0" max="50" // Adjust max value as per your needs
          onChange={handlePrixMinChange} />
        <p>Prix Min</p>
        <input
          type="number"
          placeholder="Prix maximum"
          value={prixMax}
          min="0" max="50" // Adjust max value as per your needs
          onChange={handlePrixMaxChange} />
        <p>Prix Max</p>
      </div>


      <div className='containerfilterprices'>
        {filteredChocolats.map(chocolat => (
          <div className='bannerrightside' key={chocolat.name}>
            <h3> note : {chocolat.note}/5</h3><br/>
            <p>{chocolat.title}</p ><br/>
            <p>{chocolat.price} €</p><br/>
            <img className="filter" src={require(`../images/${chocolat.image}`)} alt="imgjson" />

          </div>
        ))}
      </div>
    </>
  );
}

export default ChocolateFilter;