import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Entreprise() {
  const [entreprise, setEntreprise] = useState({
    id: null,
    adresse: '',
    tlf: '',
    url: '',
    email: '',
   });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEntreprise({
      ...entreprise,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    axios.post('http://localhost:8080/entreprisea', entreprise)
      .then((response) => {
        console.log('Success:', response);
        // Assuming the server responds with the updated list of entreprises
        setEntreprises(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  

  const [entreprises, setEntreprises] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/entreprise')
      .then((response) => {
        console.log('Response:', response.data);
        setEntreprises(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);
  
  return (
    <form onSubmit={handleSubmit}>
      <div className='container mt-5'>
      <h2>Ajouter une entreprise</h2>
      <br></br>
        <div className="mb-3">
          <label htmlFor="id" className="form-label">ID entreprise</label>
          <input
            type="text"
            name="id"
            className="form-control w-50"
            id="id"
            placeholder="Entrez l'ID de la entreprise"
            value={entreprise.id}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="adresse" className="form-label">adresse de la entreprise</label>
          <input
            type="text"
            name="adresse"
            className="form-control w-50"
            id="adresse"
            placeholder="Entrez l adresse de la entreprise"
            value={entreprise.adresse}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tlf" className="form-label">telephone</label>
          <input
            type="text"
            name="tlf"
            className="form-control w-50"
            id="tlf"
            placeholder="Entrez le telephone"
            value={entreprise.tlf}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="url" className="form-label">Url</label>
          <input
            type="text"
            name="url"
            
            className="form-control w-50"
            id="url"
            placeholder="Entrez le coût"
            value={entreprise.url}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">email</label>
          <input
            type="text"
            name="email"
            className="form-control w-50"
            id="email"
            placeholder="Entrez l'email"
            value={entreprise.email}
            onChange={handleChange}
          />
        </div>
         
        <button className="btn btn-primary" type="submit">Ajouter entreprise</button>
      </div>
      <div className="container mt-5">
        <h2>Liste des entreprises</h2>
        <ul className="list-group">
          {entreprises.map((entreprise) => (
            <li key={entreprise.id} className="list-group-item">
              ID entreprise: {entreprise.id}, adresse: {entreprise.adresse}, tlfn: {entreprise.tlf}, Url: {entreprise.url}, Email: {entreprise.email}, 
            </li>
          ))}
        </ul>
      </div>
    </form>
  );
}

export default Entreprise;
