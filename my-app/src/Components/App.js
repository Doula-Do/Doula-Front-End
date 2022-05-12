import "../App.css";
import React from "react";
import Homepage from "./Homepage";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
    <Routes>
       <Route path="/" element={<Homepage />} />
    </Routes>
    </div>
  );
}

export default App;
