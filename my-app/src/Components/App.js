import "../App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "../Components/Homepage/Homepage";
import SignIn from "./SignInPage/SignIn";
import { Routes, Route } from "react-router-dom";
import Impacts from "./ImpactsPage/Impacts";
import FamilySignUp from "./SignUpPages/FamilySignUp.js";
import Home from "./Home/home.js";
import DoulaSignUp from "./SignUpPages/DoulaSignUp";
import FamilySignUpTwo from "./SignUpPages/FamilySignUp2";

function App() {
  return (

    <div>
      <Routes>
        <Route path="/findclinic" element={<Homepage />} />
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/impacts" element={<Impacts />} />
        <Route path="/FamilySignUp" element={<FamilySignUp />} />
        <Route path="/FamilySignUpTwo" element={<FamilySignUpTwo />} /> 
        <Route path="/DoulaSignUp" element={<DoulaSignUp />} />
      </Routes>
    </div>
    
    
  );
}

export default App;