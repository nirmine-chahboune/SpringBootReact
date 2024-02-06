import React, { useState, useEffect } from 'react';
import axios from 'axios';

const IndividuReussiTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint for individuReussi
    axios.get('http://localhost:8080/IndividuReussi') // Replace with your actual API endpoint
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleButtonClick = async (individugmail) => {
    // Pass the selected values to the parent component
     

    // Make an API call to send an email to the selected individu
    try {
      const response = await fetch('http://localhost:8080/api/email/sendNotif', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          vers: individugmail, // Replace with the actual individu's email
           
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
    <div className="container mt-5">
      <h2>IndividuReussi Table</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Individu Name</th>
            <th>Formation Name</th>
            <th>Individu Gmail</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.individuName}</td>
              <td>{row.formationName}</td>
              <td>{row.individugmail}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handleButtonClick(row.individugmail)}
                >
                  envoyer evaluation
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IndividuReussiTable;
