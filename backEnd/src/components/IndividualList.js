import { useState, useEffect } from 'react';
import axios from 'axios';
import FormationIndPopup from './FormationIndPopup';

const IndividualList = () => {
  const [data, setData] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedFormateur, setSelectedFormateur] = useState(null);
  const [formateursList, setFormateursList] = useState([]); // Initialize the formateursList
  const [disableAffecterButton, setDisableAffecterButton] = useState(false);

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

  const handleAffecterFormateur = (IdEIndividu) => {
    // Logic to fetch the list of formateurs for the popup
    axios.get('http://localhost:8080/formateur') // Replace with the actual API endpoint
      .then((response) => {
        setFormateursList(response.data);
        setSelectedFormateur(null); // Reset selectedFormateur
        setShowPopup(true);
      })
      .catch((error) => {
        console.error('Error fetching formateurs:', error);
      });
  };

  const handleInsereIndividu = async (row) => {
    try {
      // Check if a formateur is already assigned
      if (row.nomFormateur) {
        console.log('A formateur is already assigned for this individu');
        return;
      }

      // Make a POST request to the new API endpoint
      const response = await fetch(`http://localhost:8080/InsertIndividuReussin/${row.nomIndividu}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        console.log('Individu inserted into IndividuReussi successfully!');
        // Update the row in the state to mark that the formateur is assigned
        const updatedData = data.map((r) => (r.IdEIndividu === row.IdEIndividu ? { ...r, nomFormateur: 'Assigned' } : r));
        setData(updatedData);
        // Disable the "Affecter un Formateur" button after successful insertion
        setDisableAffecterButton(true);
      } else {
        console.error('Failed to insert individu into IndividuReussi:', response.statusText);
        // Log the specific error message from the server
        const errorMessage = await response.text();
        console.error('Server Error:', errorMessage);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSelectFormateur = (selectedFormateur) => {
    // Logic to update the selected formateur in the table
    const updatedData = data.map((row) => {
      if (row.IdEIndividu === selectedFormateur.IdEIndividu) {
        return { ...row, nomFormateur: selectedFormateur.nomFormateur };
      }
      return row;
    });

    // Close the popup and update the table data
    setShowPopup(false);
    setData(updatedData);
  };

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
            <th>id</th>
            <th>Individu Name</th>
            <th>Formation Name</th>
            <th>individu gmail</th>
            <th>Affecter un Formateur</th>
            <th>Formation done</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.IdEIndividu}>
              <td>{row.IdEIndividu}</td>
              <td>{row.nomIndividu}</td>
              <td>{row.nomFormation}</td>
              <td>{row.email}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handleAffecterFormateur(row.IdEIndividu)}
                  disabled={disableAffecterButton}
                >
                  Affecter un Formateur
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handleInsereIndividu(row)}
                  disabled={row.nomFormateur} // Disable the button if formateur is already assigned
                >
                  A passe la formation
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showPopup && (
        <FormationIndPopup
          formateurs={formateursList} // Pass the actual list of formateurs
          isOpen={showPopup}
          onClose={() => setShowPopup(false)}
          onAffecter={handleSelectFormateur}
        />
      )}
    </div>
  );
};

export default IndividualList;
