import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function FormUser() {
  const [formation, setFormation] = useState({
    idFormation: null,
    nom: '',
    nbrH: 0,
    cout: 0.0,
    objectif: '',
    programme: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormation({
      ...formation,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8080/formationra', formation)
      .then((response) => {
        console.log('Success:', response);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const [formations, setFormations] = useState([]);

  useEffect(() => {
    // Make a GET request to fetch formations
    axios.get('http://localhost:8080/formation')
      .then((response) => {
        // Update the state with the received data
        setFormations(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []); // The empty dependency array means this effect runs once when the component mounts

  return (
    <form onSubmit={handleSubmit}>
      <div className='container mt-5'>
      <h2>Ajouter une  formation</h2>
      <br></br>
        <div className="mb-3">
          <label htmlFor="idFormation" className="form-label">ID Formation</label>
          <input
            type="text"
            name="idFormation"
            className="form-control w-50"
            id="idFormation"
            placeholder="Entrez l'ID de la formation"
            value={formation.idFormation}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="nom" className="form-label">Nom de la Formation</label>
          <input
            type="text"
            name="nom"
            className="form-control w-50"
            id="nom"
            placeholder="Entrez le nom de la formation"
            value={formation.nom}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="nbrH" className="form-label">Nombre d'heures</label>
          <input
            type="number"
            name="nbrH"
            className="form-control w-50"
            id="nbrH"
            placeholder="Entrez le nombre d'heures"
            value={formation.nbrH}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cout" className="form-label">Coût</label>
          <input
            type="number"
            name="cout"
            step="0.01"
            className="form-control w-50"
            id="cout"
            placeholder="Entrez le coût"
            value={formation.cout}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="objectif" className="form-label">Objectif</label>
          <input
            type="text"
            name="objectif"
            className="form-control w-50"
            id="objectif"
            placeholder="Entrez l'objectif"
            value={formation.objectif}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="programme" className="form-label">Programme</label>
          <input
            type="text"
            name="programme"
            className="form-control w-50"
            id="programme"
            placeholder="Entrez le programme"
            value={formation.programme}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary" type="submit">Ajouter Formation</button>
      </div>
      <div className="container mt-5">
        <h2>Liste des formations</h2>
        <ul className="list-group">
          {formations.map((formation) => (
            <li key={formation.idFormation} className="list-group-item">
              ID Formation: {formation.idFormation}, Nom: {formation.nom}, Nombre d'heures: {formation.nbrH}, Coût: {formation.cout}, Objectif: {formation.objectif}, Programme: {formation.programme}
            </li>
          ))}
        </ul>
      </div>
    </form>
  );
}

export default FormUser;
