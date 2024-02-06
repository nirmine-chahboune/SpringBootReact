import React, { useState } from 'react';
import { Link ,useHistory} from 'react-router-dom';
import InscriptionForm from './InscriptionForm';
import 'bootstrap/dist/css/bootstrap.min.css';
 
const linkStyle = {
  textDecoration: 'none',
  color: '#007bff', // Couleur du lien
  fontWeight: 'bold', // Gras
  marginRight: '10px', // Marge à droite pour l'espacement
};
const FormationList = ({ formations }) => {
   
  
  const [searchTerm, setSearchTerm] = useState('');
  


  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filtrer les formations en fonction du terme de recherche
  const filteredFormations = formations.filter((formation) =>
    formation.nom.toLowerCase().includes(searchTerm.toLowerCase())
  );
 
  return (
    <div className="container mt-5">
      <div className="card" style={{ backgroundColor: '#b3e0ff' }}>
        <div className="card-header">
          <h2 className="card-title">
            Liste des Formations{' '}
            
          </h2>
          
          

          <input
            type="text"
            className="form-control float-right"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div></div>
      <br></br>
      <div className="row">
        {filteredFormations.map((formation) => (
          <div key={formation.id} className="col-md-3 mb-4">
            <div className="card border-dark" style={{ width: '100%', marginBottom: '20px' }}>
              

              {/* Card Body */}
              <div className="card-body">
                <h5 className="card-title">{formation.nom}</h5>
                <p className="card-text">{formation.objectif}</p>
              </div>

              {/* List Group */}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Programme: {formation.programme}</li>
                <li className="list-group-item">
                  
                </li>
                {/* Add more list items for additional attributes */}
              </ul>

              {/* Additional Card Body */}
              <div className="card-body">
  <li className="list-group-item" style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
    {console.log('Formation Name before Link:', formation.nom)}

    <Link to={`/inscription/${encodeURIComponent(formation.nom)}/${formation.id}`} style={linkStyle}>
      S'inscrire
    </Link>
  </li>
  {' '}
  <li style={{ display: 'flex', alignItems: 'center' }}>
    <Link to={`/FormateurForm/${encodeURIComponent(formation.nom)}`} style={linkStyle}>
      S'inscrire autant que formateur
    </Link>
  </li>
</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormationList;
