import React, { useState } from 'react';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FormationPopup.css';  // Import your custom CSS for styling

const FormationPopup = ({ formations, entreprises, isOpen, onClose, onAffecter }) => {
  const [selectedFormation, setSelectedFormation] = useState('');
  const [selectedEntreprise, setSelectedEntreprise] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleAffecterClick = () => {
    // Pass the selected values to the parent component
    onAffecter({
      formation: selectedFormation,
      entreprise: selectedEntreprise,
      date: selectedDate,
    });
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="custom-modal">
      <div className="custom-modal-content">
        <h2>Affecter Formation</h2>

        <div className="mb-3">
          <label>Formation:</label>
          <select
            className="form-control"
            value={selectedFormation}
            onChange={(e) => setSelectedFormation(e.target.value)}
          >
            <option value="" disabled>Select Formation</option>
            {formations.map((formation) => (
              <option key={formation.id} value={formation.id}>
                {formation.nom}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label>Entreprise:</label>
          <select
            className="form-control"
            value={selectedEntreprise}
            onChange={(e) => setSelectedEntreprise(e.target.value)}
          >
            <option value="" disabled>Select Entreprise</option>
            {entreprises.map((entreprise) => (
              <option key={entreprise.id} value={entreprise.id}>
                {entreprise.url}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label>Date:</label>
          <DatePicker
            className="form-control"
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
          />
        </div>

        <button className="btn btn-success" onClick={handleAffecterClick}>
          Affecter
        </button>
        {' '}
        <button className="btn btn-danger" onClick={onClose}>
          Annuler
        </button>
      </div>
    </Modal>
  );
};

export default FormationPopup;
