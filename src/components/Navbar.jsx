import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function SchoolNavbar() {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand className="fw-bold text-primary">
          Guzia Confidence Public School
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">HOME</Nav.Link>
            <Nav.Link as={Link} to="/about">ABOUT US</Nav.Link>
            <Nav.Link as={Link} to="/admissions">ADMISSIONS</Nav.Link>
            <Nav.Link as={Link} to="/activities">ACTIVITIES</Nav.Link>
            <Nav.Link as={Link} to="/gallery">GALLERY</Nav.Link>
            <Nav.Link as={Link} to="/contact">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default SchoolNavbar;
