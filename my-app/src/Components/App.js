import "../App.css";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from "./Homepage";
import SignIn from "./SignIn";
import { Routes, Route } from "react-router-dom";
import Impacts from "./Impacts";
import FamilySignUp from "./FamilySignUp";

function App() {
  return (
    <div>
    <Routes>
       <Route path="/" element={<Homepage />} />
       <Route path="/SignIn" element={<SignIn/>} />
       <Route path="/impacts" element={<Impacts />} />
       <Route path="/FamilySignUp" element={<FamilySignUp />} />
    </Routes>
    </div>
  );
}

export default App;
