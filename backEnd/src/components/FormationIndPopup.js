import React, { useState } from 'react';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FormationPopup.css';  // Import your custom CSS for styling

Modal.setAppElement('#root');

const FormationIndPopup = ({ formateurs, isOpen, onClose, onAffecter }) => {
  const [selectedFormateur, setSelectedFormateur] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleAffecterClick = async () => {
    // Pass the selected values to the parent component
    onAffecter({
      formateur: selectedFormateur,
      date: selectedDate,
    });

    // Make an API call to send an email to the selected individu
    try {
      const response = await fetch('http://localhost:8080/api/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          vers: ' ', // Replace with the actual individu's email
          formateurName: selectedFormateur, // Add formateur name
          formationName: 'Your Formation Name', // Add formation name
        }),
      });

      if (response.ok) {
        console.log('Email sent to individu successfully!');
      } else {
        console.error('Failed to send email to individu');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="custom-modal">
      <div className="custom-modal-content">
        <h2>Affecter Formateur</h2>

        <div className="mb-3">
          <label>Formateur:</label>
          <select
            className="form-control"
            value={selectedFormateur}
            onChange={(e) => setSelectedFormateur(e.target.value)}
          >
            <option value="" disabled>Select Formateur</option>
            {formateurs.map((formateur) => (
              <option key={formateur.idformateur} value={formateur.nom}>
                {formateur.nom}
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
          Affecter et notifier par gmail
        </button>
        {' '}
        <button className="btn btn-danger" onClick={onClose}>
          Annuler
        </button>
      </div>
    </Modal>
  );
};

export default FormationIndPopup;
