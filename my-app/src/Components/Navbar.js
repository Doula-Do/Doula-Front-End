import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";

function Navbar() {
  return (
    <Nav>
      <NavItem>
        <Link to={"/"}>
          {" "}
          <NavLink active href="">
            Home
          </NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link to={"/impacts"}>
          <NavLink>Impacts</NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link to={"/SignIn"}>
          <NavLink>
            Log Out
          </NavLink>
        </Link>
      </NavItem>
    </Nav>
  );
}

export default Navbar;
