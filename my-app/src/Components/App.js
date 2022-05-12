import Navbar from './Navbar.js';
import Footer from './footer.js';
import "../App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
    {/* <Routes> */}
      <Navbar/>
      <Footer/>
    {/* </Routes> */}
    </div>
  );
}

export default App;
