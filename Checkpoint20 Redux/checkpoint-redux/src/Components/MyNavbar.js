import React from "react";
import { Navbar, FormControl, Button, Nav, Form } from "react-bootstrap";
import Task from "./Task";

const MyNavbar = () => {
  return (
    <div className="MyNavbar">
      <Navbar variant="dark">
        <Navbar.Brand >My TODO App</Navbar.Brand>
        <Nav className="MyNavbar mr-auto">
          <Nav.Link >Home</Nav.Link>
        </Nav>
        <Form inline>
          <Task/>
        </Form>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
