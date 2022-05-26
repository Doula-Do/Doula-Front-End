import "../App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./Map/clinicMap.js";
import SignIn from "./SignInPage/SignIn";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Impacts from "./ImpactsPage/Impacts";
import FamilySignUp from "./SignUpPages/FamilySignUp.js";
import Home from "./Home/home.js";
import SignUp from "./SignUpPages/SignUp";
// import FamilySignUpTwo from "./SignUpPages/FamilySignUp2";
import UserProfile from "./profiles/userProfile";
import { useState, useEffect } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  const navigate = useNavigate();

  return (
    <div>
      <Routes>
        <Route path="/findclinic" element={<Homepage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/testimonials" element={<Impacts />} />
        <Route path="/FamilySignUp" element={<FamilySignUp />} />
        {/* <Route path="/FamilySignUpTwo" element={<FamilySignUpTwo />} />  */}
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/user/:id" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
