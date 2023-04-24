import "../../Stylesheet/Navbar3.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

import React from "react";

function Navbar3() {
  const handle=()=>{
    localStorage.clear();

  }
  return (
    <div className="Navbar3">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="./Home" className="nav-item">
                <i className="bi bi-house"></i> &nbsp;&nbsp; Home{" "}
              </NavLink>
              {"     "}
              &nbsp;&nbsp;&nbsp;&nbsp;
              <NavLink to="./Cars" className="nav-item inline">
                <i className="bi bi-car-front"> </i> &nbsp;&nbsp; Book Car
              </NavLink>
              {"     "}
              &nbsp;&nbsp;&nbsp;&nbsp;
              <NavLink to="./Aboutus" className="nav-item">
                <i className="bi bi-file-person"></i> &nbsp;&nbsp; About us
              </NavLink>
              {"     "}
              &nbsp;&nbsp;&nbsp;&nbsp;
              <NavLink to="./Contactus" className="nav-item">
                <i className="bi bi-telephone"></i> &nbsp;&nbsp;Contact us
              </NavLink>
            </Nav>
            <Nav>
              <NavLink to="./Profile" className="nav-item">
                <i className="bi bi-person-circle"></i> &nbsp;&nbsp; Profile
              </NavLink>
              {"     "}
              &nbsp;&nbsp;&nbsp;&nbsp;
              <NavLink to="/" onSubmit={handle}>
                <i className="bi bi-box-arrow-right"></i>&nbsp;&nbsp;Logout
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbar3;
