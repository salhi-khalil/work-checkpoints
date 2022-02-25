import React, { useState } from "react";

import "./App.css";
import { Nav, Navbar } from "react-bootstrap";
import MovieList from "./Components/MovieList";
import Movies from "./Components/Movies";
import AddToTheList from "./Components/AddToTheList";
import SearchMovies from "./Components/SearchMovies";

const App = () => {
  //useState()
  const [MovieData, setMovieData] = useState(Movies);
  const [SearchBy1, setSearchBy1] = useState(""); //for filtering by movie name
  const [SearchBy2, setSearchBy2] = useState(0); //for filtering by rating using stars

  const filteredMovie1 = (e) => {
    setSearchBy1(e.target.value);
  };
  const filteredMovie2 = (e) => {
    setSearchBy2(e);
  };

  const Add = (ob) => {
    setMovieData([...MovieData, ob]);
  };

  return (
    <div className="App">
      <div className="Navbar">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand >My Movie App </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <AddToTheList Add={Add} />
              </Nav.Link>
            </Nav>
            <Nav>
              <SearchMovies
                SearchBy1={filteredMovie1}
                SearchBy2={filteredMovie2}
              />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <MovieList movie={MovieData} name={SearchBy1} rating={SearchBy2} />
      <AddToTheList Add={Add} />
      <footer>
      <hr/>
        <h5>Movies @2021</h5>
        <p>Checkpoint React Hooks: Movie App</p>
      </footer>
    </div>
  );
};

export default App;
