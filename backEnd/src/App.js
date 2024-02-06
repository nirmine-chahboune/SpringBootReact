import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from 'axios';

import AuthService from "./services/auth.service";

import Login from "./components/Login";

import FormationList from "./components/FormationList";
import Profile from "./components/Profile";
import BoardFormateur from "./components/BoardFormateur";
import BoardAssistant from "./components/BoardAssistant";
import BoardAdmin from "./components/BoardAdmin";
import Appbar from "./components/Appbar";
import Entreprise from "./components/Entreprise";
import InscriptionForm from "./components/InscriptionForm";
import IndividuReussiTable from "./components/IndividuReussiTable";
import IndividualList from "./components/IndividualList";
import FormateurForm from "./components/FormateurForm";
import ListeFormateurs from "./components/ListeFormateurs";
import FormUser from "./components/FormUser";
import EventBus from "./common/EventBus";

const App = () => {
  const [showAssistantBoard, setShowAssistantBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [formations, setFormations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data
    axios.get('http://localhost:8080/formation')
      .then((response) => {
        setFormations(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erreur :', error);
        setLoading(false);
      });

    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowAssistantBoard(user.roles.includes("ROLE_ASSISTANT"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []); 
  const logOut = () => {
    AuthService.logout();
    setShowAssistantBoard(false);
    setShowAdminBoard(false);
    setCurrentUser(undefined);
  };

  return (
    <div>
      <Appbar 
      showAssistantBoard={showAssistantBoard}
      showAdminBoard={showAdminBoard}
      currentUser={currentUser}
      logOut={logOut}/> 
      

      <div className="container mt-3">
        <Routes>
          <Route exact path={"/"} element={<FormationList formations={formations} />} />
          <Route exact path={"/home"} element={<FormationList formations={formations} />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/inscription/:formationName/:formationId" element={<InscriptionForm />} />
          <Route path="/Entreprise" element={<Entreprise  />} />
          <Route path="/IndividuReussiTable" element={<IndividuReussiTable />} />
           <Route path="/IndividualList" element={<IndividualList  />} />
           <Route path="/FormateurForm/:formationName" element={<FormateurForm />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route path="/formateur" element={<BoardFormateur />} />
          <Route path="/assistant" element={<BoardAssistant />} />
          <Route path="/admin" element={<BoardAdmin />} />
          <Route path="/ListeFormateurs" element={<ListeFormateurs  />} />
          <Route path="/ajouterformation" element={<FormUser  />} />
        </Routes>
      </div>

      {/* <AuthVerify logOut={logOut}/> */}
    </div>
  );
};

export default App;
