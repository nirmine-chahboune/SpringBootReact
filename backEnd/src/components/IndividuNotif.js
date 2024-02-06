import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormationIndPopup from './FormationIndPopup';

const IndividuNotif = () => {
  const [data, setData] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedFormateur, setSelectedFormateur] = useState(null);
  const [formateursList, setFormateursList] = useState([]); // Initialize the formateursList

  useEffect(() => {
    // Fetch data from your API endpoint
    axios.get('http://localhost:8080/individu') // Replace with your actual API endpoint
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);
 
  const handleEnvoyerEvaluation = (IdEIndividu) => {
    // Logic to handle "Envoyer Évaluation" button click
    console.log(`Envoyer Évaluation for individu with ID ${IdEIndividu}`);
  };
 
  return (
    <div className="container mt-5">
      <h2>Individu Table</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Individu Name</th>
            <th>Formation Name</th>
            <th>individu gmail</th>
            
            <th>Envoyer Évaluation</th>
          </tr>
        </thead>
        <tbody>
          
              <td> </td>
              <td> </td>
              <td> </td>
              <td>
                 
              </td>
              <td>
              <button className="btn btn-success"  >
                  Envoyer Évaluation
                </button>
              </td>
           
        
        </tbody>
      </table>
       
    </div>
  );
};

export default IndividuNotif;
