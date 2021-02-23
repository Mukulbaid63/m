import React from "react";
import { Form, Button, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
const MainNavBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" className='justify-content-around'>
        <div>
        <Navbar.Brand href="#home">UnScripted</Navbar.Brand>
        </div>
        <div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto justify-content-between">
            <Nav.Link  className="mr-5" href="#home">Home</Nav.Link>
            <Nav.Link className="mr-5"  href="#link">Hackathons</Nav.Link>
            <Nav.Link className="mr-5"  href="#home">Feed</Nav.Link>
            <Nav.Link className="mr-5"  href="#link">Events</Nav.Link>
            <Nav.Link className="mr-5"  href="#home">IDE</Nav.Link>
            <Nav.Link className="mr-5"  href="#link">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Navbar>
      
    </div>
  );
};

export default MainNavBar;
