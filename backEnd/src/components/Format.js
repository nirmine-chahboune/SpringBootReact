import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormationPopup from './FormationPopup';

const ListeFormations = () => {
  const [formations, setFormations] = useState([]);
  const [entreprises, setEntreprises] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  
  const [formateurs, setFormateurs] = useState([]);

  const openPopup = (e) => {
    e.preventDefault();
  
    // Fetch formateurs data
    axios.get('http://localhost:8080/formateur')
      .then((response) => {
        setFormateurs(response.data);
      })
      .catch((error) => {
        console.error('Error fetching formateurs:', error);
      });

    // Fetch entreprises data
    axios.get('http://localhost:8080/entreprise')
      .then((response) => {
        setEntreprises(response.data);
      })
      .catch((error) => {
        console.error('Error fetching entreprises:', error);
      });

    // Show the popup
    setShowPopup(true);
  };
  
  const closePopup = () => {
    setShowPopup(false);
  };

  const handleAffecter = () => {
    console.log('Affecter Formateur');
    closePopup();
  };

  const handleRefuser = (id) => {
    // Make a DELETE request to delete the formation with the given ID
    axios.delete(`http://localhost:8080/formation/${id}`)
      .then(() => {
        // If the delete request is successful, update the state to remove the deleted formation
        setFormations((prevFormations) => prevFormations.filter((formation) => formation.id !== id));
      })
      .catch((error) => {
        console.error('Error deleting formation:', error);
      });
  };

  useEffect(() => {
    // Make a GET request to fetch formations
    axios.get('http://localhost:8080/formation')
      .then((response) => {
        setFormations(response.data);
      })
      .catch((error) => {
        console.error('Error fetching formations:', error);
      });



    // Make a GET request to fetch formateurs
    axios.get('http://localhost:8080/formateur')
      .then((response) => {
        setFormateurs(response.data);
      })
      .catch((error) => {
        console.error('Error fetching formateurs:', error);
      });

    // Make a GET request to fetch entreprises
    axios.get('http://localhost:8080/entreprise')
      .then((response) => {
        setEntreprises(response.data);
      })
      .catch((error) => {
        console.error('Error fetching entreprises:', error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h2>Formations</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Nombre d'heures</th>
            <th>Coût</th>
            <th>Objectif</th>
            <th>Programme</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {formations.map((formation) => (
            <tr key={formation.id}>
              <td>{formation.id}</td>
              <td>{formation.nom}</td>
              <td>{formation.nbrH}</td>
              <td>{formation.cout}</td>
              <td>{formation.objectif}</td>
              <td>{formation.programme}</td>
              <td>
                
                <button
  className="btn btn-danger ms-2"
  onClick={() => handleRefuser(formation.id)}
>
  Supprimer
</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showPopup && (
        <FormationPopup
          formateurs={formateurs}
          entreprises={entreprises}
          handleAffecter={handleAffecter}
          closePopup={closePopup}
        />
      )}
    </div>
  );
};

export default ListeFormations;