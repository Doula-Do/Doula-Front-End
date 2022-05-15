import "../App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./Homepage";
import SignIn from "./SignIn";
import { Routes, Route } from "react-router-dom";
import Impacts from "./ImpactsPage/Impacts";
import FamilySignUp from "./FamilySignUp";
import Home from "./Home/home.js";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/findclinic" element={<Homepage />} />
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/impacts" element={<Impacts />} />
        <Route path="/FamilySignUp" element={<FamilySignUp />} />
      </Routes>
    </div>
  );
}

export default App;