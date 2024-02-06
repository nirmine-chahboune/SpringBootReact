import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const  FormateurForm= () => {
  const { formationName } = useParams();
  console.log('Formation Name:', formationName);

  const [formateur, setFormateur] = useState({
    id: null,
    nom: '',
    numero: '',
    motcle: '',
    remarque: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormateur({
      ...formateur,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8080/formateura', formateur)
      .then((response) => {
        console.log('Success:', response);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const [formateurs, setFormateurs] = useState([]);

  useEffect(() => {
    // Make a GET request to fetch equipes
    axios.get('http://localhost:8080/formateur')
      .then((response) => {
        // Update the state with the received data
        setFormateurs(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []); // The empty dependency array means this effect runs once when the component mounts


  return (
    <div className="container mt-5">
      <h2>Inscription Formateur Form {formationName}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="idformateur" className="form-label">Id</label>
          <input
            type="text"
            name="idformateur"
            className="form-control"
            id="idformateur"
            value={formateur.idformateur}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="nom" className="form-label">Nom</label>
          <input
            type="text"
            name="nom"
            className="form-control"
            id="nom"
            value={formateur.nom}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="numero" className="form-label">Numéro</label>
          <input
            type="text"
            name="numero"
            className="form-control"
            id="numero"
            value={formateur.numero}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="motcle" className="form-label">Mot-clé</label>
          <input
            type="text"
            name="motcle"
            className="form-control"
            id="motcle"
            value={formateur.motcle}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="remarque" className="form-label">Remarque</label>
          <textarea
            name="remarque"
            className="form-control"
            id="remarque"
            value={formateur.remarque}
            onChange={handleChange}
          />
        </div>

        

        <button type="submit" className="btn btn-primary">S'inscrire</button>
      </form>
    </div>
  );
};

export default  FormateurForm;
