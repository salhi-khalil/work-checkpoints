import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Interval from "./Component/int";

const styleImg = { width: 300 };

class App extends React.Component {
  state = {
    shows: false,
    fullName: "Nada Nsiri",
    profession: "Hydraulic and Environmental Engineer",
    bio:
      "Elit anim qui et adipisicing pariatur. Anim cillum velit excepteur nisi sunt sit anim tempor ipsum. Esse est laboris adipisicing ex consequat qui dolore sit proident aute cillum dolor dolor dolore. Aute ullamco Lorem commodo amet ex nisi commodo incididunt non dolore eu laborum culpa. Laborum sint proident sint sunt cupidatat nisi esse elit.",
    imgSrc: (
      <img src="/silhouette 1.png" alt="Profile_Photo" style={styleImg} />
    ),
  };
  render() {
    const buttonMsg = this.state.shows ? "Hide Profile" : "Show Profile";
    return (
      <div className="App">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">Checkpoint //React State</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <NavDropdown title="Helpful Documentation" id="collasible-nav-dropdown">
                <NavDropdown.Item href="https://www.youtube.com/watch?v=3wvdq_j5S1c">
                  How to Conditionally Render Components in React.js - Part 7
                </NavDropdown.Item>
                <NavDropdown.Item href="https://upmostly.com/tutorials/setinterval-in-react-components-using-hooks">
                  setInterval in React Components Using Hooks
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="title">
          <h1>Profile:</h1>
        </div>
        {this.state.shows ? (
          <div className="profileElements">
            <h1>{this.state.fullName}</h1>
            <h3>{this.state.profession}</h3>
            <div>{this.state.imgSrc}</div>
            <p>
              <b>Bio:</b>
              <br />
              {this.state.bio}
            </p>
          </div>
        ) : null}
        <button onClick={() => this.setState({ shows: !this.state.shows })}>
          {buttonMsg}
        </button>
        <Interval />
      </div>
    );
  }
}
export default App;
