// InscriptionForm.js
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
 



const InscriptionForm = () => {
  // In InscriptionForm.js
 
  const { formationName, formationId } = useParams();

  console.log('Formation Name:', formationName);
  console.log('Formation Id:', formationId);

  const [individu, setIndividu] = useState({
    idEIndividu: null,
    nom: '',
    prenom: '',
    dateNaissance: '',
    ville: '',
    email: '',
    telephone: '',
    nomFormation:formationName,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIndividu({
      ...individu,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post('http://localhost:8080/individua', individu)
      .then((response) => {
        console.log('Success:', response);
        toast.success('Vous êtes inscrit à la formation avec succès');
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error('erreur');
      });
  };

  // ...

  const [individus, setIndividus] = useState([]);

  useEffect(() => {
    // Make a GET request to fetch individus
    axios.get('http://localhost:8080/individu')
      .then((response) => {
        // Update the state with the received data
        setIndividus(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []); // The empty dependency array means this effect runs once when the component mounts

// ...
 

  return (
    <div className="container mt-5">
       <ToastContainer />
      <h2>Inscription Form a {formationName}</h2>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
          <label htmlFor="idEIndividu" className="form-label">Id</label>
          <input
            type="text"
            name="idEIndividu"
            className="form-control"
            id="idEIndividu"
            value={individu.idEIndividu}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="nomIndividu" className="form-label">Nom</label>
          <input
            type="text"
            name="nomIndividu"
            className="form-control"
            id="nomIndividu"
            value={individu.nomIndividu}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="prenom" className="form-label">Prénom</label>
          <input
            type="text"
            name="prenom"
            className="form-control"
            id="prenom"
            value={individu.prenom}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="datenaiss" className="form-label">Date de Naissance</label>
          <input
            type="date"
            name="datenaiss"
            className="form-control"
            id="datenaiss"
            value={individu.datenaiss}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ville" className="form-label">Ville</label>
          <input
            type="text"
            name="ville"
            className="form-control"
            id="ville"
            value={individu.ville}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            value={individu.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Téléphone</label>
          <input
            type="tel"
            name="phone"
            className="form-control"
            id=" phone"
            value={individu.phone}
            onChange={handleChange}
            required
          />

        </div>

        <div className="mb-3">
        <label htmlFor="nomFormation">Formation</label>
        <input
    type="text"
    name="nomFormation"
    className="form-control"
    id="nomFormation"
    value={formationName}
    onChange={handleChange}
    required
  />
      </div>
        
        
        <button type="submit" className="btn btn-primary">S'inscrire</button>
      </form>
    </div>
  );
};

export default InscriptionForm;
