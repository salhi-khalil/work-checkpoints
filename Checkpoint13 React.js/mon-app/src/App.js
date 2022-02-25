import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Form from "react-bootstrap/Form";

function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">React-Bootstrap-Checkpoint</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="More" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">About US</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Lilacs & Lavender
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Green life</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                I almost finished my checkpoint
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">MyCart</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              {" "}
              Check these links
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="/Image1.jpg" alt="First slide" />
          <Carousel.Caption>
            <h1> Lilac & lavender</h1>
            <p>
              "As far as what I do love, I love birds; I love lavender." ~
              Michael Moore.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/Image2.jpg" alt="Second slide" />

          <Carousel.Caption>
            <h1> Lilac & lavender</h1>
            <p>
              "As far as what I do love, I love birds; I love lavender." ~
              Michael Moore.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/Image3.jpg" alt="Third slide" />

          <Carousel.Caption>
            <h1> Lilac & lavender</h1>
            <p>
              "As far as what I do love, I love birds; I love lavender." ~
              Michael Moore.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="Survey">
        <h1>Survey</h1>
      </div>
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>First name</Form.Label>
          <Form.Control placeholder="First name" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Last name</Form.Label>
          <Form.Control placeholder="Last name" />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Governorate</Form.Label>
          <Form.Control as="select">
            <option>Ariana</option>
            <option>Béja</option>
            <option>Ben Arous</option>
            <option>Bizerte</option>
            <option>Gabès</option>
            <option>Gafsa</option>
            <option>Jendouba</option>
            <option>Kairouan</option>
            <option>Kasserine</option>
            <option>Kebili</option>
            <option>Kef</option>
            <option>Mahdia</option>
            <option>Manouba</option>
            <option>Medenine</option>
            <option>Monastir</option>
            <option>Nabeul</option>
            <option>Sfax</option>
            <option>Sidi Bouzid</option>
            <option>Siliana</option>
            <option>Sousse</option>
            <option>Tataouine</option>
            <option>Tozeur</option>
            <option>Tunis</option>
            <option>Zaghouan</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>How did you hear about us?</Form.Label>
          <Form.Control as="select" multiple>
            <option>Search Engine</option>
            <option>Social Media</option>
            <option>Radio</option>
            <option>TV</option>
            <option>Print</option>
            <option>Word of mouth</option>
            <option>Other ______________________ </option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>
            If you answered other previously, can you specify how?
          </Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Any suggestions?</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group controlId="formBasicRange">
          <Form.Label>How satisfied are you with our services?</Form.Label>
          <Form.Control type="range" />
        </Form.Group>
      </Form>
      <footer>
        <h5>Recevez nos offres spéciales</h5>
      </footer>
    </div>
  );
}

export default App;
