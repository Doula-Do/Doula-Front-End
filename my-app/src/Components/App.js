import "../App.css";
import React from "react";
import Homepage from "./Homepage";
import SignIn from "./SignIn";
import { Routes, Route } from "react-router-dom";
import Impacts from "./Impacts";

function App() {
  return (
    <div>
    <Routes>
       <Route path="/" element={<Homepage />} />
       <Route path="/SignIn" element={<SignIn/>} />
       <Route path="/impacts" element={<Impacts />} />
    </Routes>
    </div>
  );
}

export default App;
