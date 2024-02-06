import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormationIndPopup from './FormationIndPopup';

const ind = () => {
  const [formateurs, setFormateurs] = useState([]);
   
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
  const handleRefuser = () => {
    console.log('Refuser');
    // Implement the logic for Refuser here
  };

  const handleAffecterFormateur = (IdEIndividu) => {
    // Logic to fetch the list of formateurs for the popup
    axios.get('http://localhost:8080/formateur') // Replace with the actual API endpoint for formateurs
      .then((response) => {
        // Update state to show the popup and set formateurs
        setPopupData({
          showPopup: true,
          formateurs: response.data,
          selectedIndividuId: IdEIndividu,
        });
      })
      .catch((error) => {
        console.error('Error fetching formateurs:', error);
      });
  };
  const handleSelectFormateur = (selectedFormateur) => {
    // Logic to update the selected formateur in the table
    const updatedData = data.map((row) => {
      if (row.IdEIndividu === popupData.selectedIndividuId) {
        return { ...row, nomFormateur: selectedFormateur.nomFormateur };
      }
      return row;
    });

    // Close the popup and update the table data
    setPopupData({ ...popupData, showPopup: false });
    setData(updatedData);
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
    <h2>Individu Table</h2>
    <table className="table">
      <thead>
        <tr>
          <th>Individu Name</th>
          <th>Formation Name</th>
          <th>Formateur Name</th>
          <th>Affecter un Formateur</th>
          <th>Envoyer Évaluation</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.IdEIndividu}>
            <td>{row.nomIndividu}</td>
            <td>{row.nomFormation}</td>
            <td>{row.nomFormateur}</td>
            <td>
            <button className="btn btn-success" onClick={(e) => openPopup(e)}>
                  Affecter Formateur
                </button>
                {showPopup && (
                  <FormationIndPopup
                  formateurs={popupData.formateurs}
                  onSelectFormateur={handleSelectFormateur}
                  onClose={() => setPopupData({ ...popupData, showPopup: false })}
                />
                )}
                <button className="btn btn-danger ms-2" onClick={handleRefuser}>
                  Refuser
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
