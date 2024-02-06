import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormationPopup from './FormationPopup';

const ListeFormateurs = () => {
  const [formateurs, setFormateurs] = useState([]);
  const [entreprises, setEntreprises] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  
  const [formations, setFormations] = useState([]);

  const openPopup = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
  
    // Fetch formations data
    axios.get('http://localhost:8080/formation')
      .then((response) => {
        setFormations(response.data);
      })
      .catch((error) => {
        console.error('Error fetching formations:', error);
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
    console.log('Affecter Formation');
    closePopup();
  };

  // Refuser button logic (to be implemented)
  const handleRefuser = (idformateur) => {
    // Make a DELETE request to delete the formation with the given ID
    axios.delete(`http://localhost:8080/formateur/${idformateur}`)
      .then(() => {
        // If the delete request is successful, update the state to remove the deleted formation
        setFormateurs((prevFormateurs) => prevFormateurs.filter((formateur) => formateur.idformateur !== idformateur));
      })
      .catch((error) => {
        console.error('Error deleting formateur:', error);
      });
  };

  useEffect(() => {
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

    // Make a GET request to fetch formations
    axios.get('http://localhost:8080/formation')
      .then((response) => {
        setFormations(response.data);
      })
      .catch((error) => {
        console.error('Error fetching formations:', error);
      });
  }, []); // The empty dependency array means this effect runs once when the component mounts


  return (
    <div className="container mt-5">
      <h2>Formateurs</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Numero</th>
            <th>Mot-clé</th>
            <th>Remarque</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {formateurs.map((formateur) => (
            <tr key={formateur.id}>
              <td>{formateur.idformateur}</td>
              <td>{formateur.nom}</td>
              <td>{formateur.numero}</td>
              <td>{formateur.motcle}</td>
              <td>{formateur.remarque}</td>
              <td>
                <button className="btn btn-success" onClick={(e) => openPopup(e)}>
                  Affecter Formation
                </button>
                {showPopup && (
                  <FormationPopup
                    formations={formations}
                    entreprises={entreprises}
                    isOpen={showPopup}
                    onClose={closePopup}
                    onAffecter={handleAffecter}
                  />
                )}
                <button
  className="btn btn-danger ms-2"
  onClick={() => handleRefuser(formateur.idformateur)}
>
  Supprimer
</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListeFormateurs;
