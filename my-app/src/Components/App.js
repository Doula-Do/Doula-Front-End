import "../App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "../Components/Homepage/Homepage";
import SignIn from "./SignInPage/SignIn";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Impacts from "./ImpactsPage/Impacts";
import FamilySignUp from "./SignUpPages/FamilySignUp.js";
import Home from "./Home/home.js";
import DoulaSignUp from "./SignUpPages/DoulaSignUp";
// import FamilySignUpTwo from "./SignUpPages/FamilySignUp2";
import UserProfile from "./profiles/userProfile";
import { useState, useEffect } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuthenticated = async () => {
    let localToken = window.localStorage.getItem("token");
    try {
      const res = await fetch(`http://localhost:8000/is-verify`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localToken}`,
          "Content-Type": "application/json",
        },
      });
      const response = await res.json();
      response === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  const navigate = useNavigate();

  return (
    <div>
      <Routes>
        <Route path="/findclinic" element={<Homepage />} />
        <Route path="/home" element={<Home />} />
        <Route 
          path="/" 
          element={!isAuthenticated ? (<SignIn setAuth={setAuth}/>) : (<Navigate replace to={"/"}/>)} />
        <Route path="/testimonials" element={<Impacts />} />
        <Route path="/FamilySignUp" element={<FamilySignUp />} />
        {/* <Route path="/FamilySignUpTwo" element={<FamilySignUpTwo />} />  */}
        <Route path="/DoulaSignUp" element={<DoulaSignUp />} />
        <Route path="/user/:id" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
