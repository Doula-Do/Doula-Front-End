import React from "react";
import "./navbar.css";
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <a className="navbar-brand">
          <Link to="/">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5e938ec91b86b3147a42e6eb/1586731734068-9JC0LPD07SCBG6NB6Z8J/Circle%2BGalaxy%2BMama-01.png"
            alt=""
            width="50"
            height="50"
            className="d-inline-block align-text-top"
          />
          </Link>
          <h5 className="d-inline-block align-text-top mt-3 name">DoulaDo</h5>
        </a>
        <div className="navLinkHolder">
          <h5 className="m-3">Our Mission</h5>
          <h5 className="m-3"><Link className="pageLinks" to="/findclinic">Find a Clinic</Link></h5>
          <h5 className="m-3"><Link className="pageLinks" to="/impacts">Testimonials</Link></h5>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
