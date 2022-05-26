import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <a className="navbar-brand">
          <Link to="/">
            <h5 className="d-inline-block align-text-top mt-3 name typed-out">
              DoulaDo
            </h5>
          </Link>
        </a>
        <div className="navLinkHolder">
          <h5 className="m-3">Our Mission</h5>
          <h5 className="m-3">
            <Link className="pageLinks" to="/findclinic">
              Find a Clinic
            </Link>
          </h5>
          <h5 className="m-3">
            <Link className="pageLinks" to="/testimonials">
              Testimonials
            </Link>
          </h5>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
