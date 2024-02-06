import React from 'react';

const IndividualsTable = ({ individuals, handleEdit, handleDelete }) => {
  return (
     <div>
         <div className="container mt-5">
      <div className="card" style={{ backgroundColor: '#b3e0ff'  }}>
        <div className="card-header">
          <h2 className="card-title">List des individus inscrits aux formations</h2>
         
          <input type="text" className="form-control float-right" placeholder="Search..." />
        </div>
      </div>
      <div></div></div>
      <br></br>
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Date of Birth</th>
          <th>City</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {individuals.map((individual) => (
          <tr key={individual.idEIndividu}>
            <td>{individual.idEIndividu}</td>
            <td>{individual.nomIndividu}</td>
            <td>{individual.datenaiss}</td>
            <td>{individual.ville}</td>
            <td>{individual.email}</td>
            <td>{individual.phone}</td>
            <td>
              <button
                className="btn btn-primary"
                onClick={() => handleEdit(individual.id)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger ml-2"
                onClick={() => handleDelete(individual.id)}
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

export default IndividualsTable;
