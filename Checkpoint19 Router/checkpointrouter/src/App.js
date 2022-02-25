import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";
import "./App.css";
import { Nav, Navbar } from "react-bootstrap";
import MovieList from "./Components/MovieList";
import Movies from "./Components/Movies";
import AddToTheList from "./Components/AddToTheList";
import SearchMovies from "./Components/SearchMovies";
import MovieTrailer from "./Components/MovieTrailer";
import About from "./Components/About";

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
    <Router>
      <div className="App">
        <div className="Navbar">
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>
              <Link to="/">Home</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link to="/about">
                  <Link to="/about">About</Link>
                </Nav.Link>
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

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <MovieList movie={MovieData} name={SearchBy1} rating={SearchBy2} />
          </Route>
          {MovieData.map(el=><Route path={`/description/${el.id}`}><MovieTrailer
              title={el.title}
              trailer={el.trailer}
              description={el.description}
              rating={el.rating}
            />
            </Route>)}
        </Switch>
        <footer>
          <h5>Movies @2021</h5>
          <hr/>
          <p>Checkpoint React Router: Movie App</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
