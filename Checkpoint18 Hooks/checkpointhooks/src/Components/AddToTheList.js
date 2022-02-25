//We'll try to add a movie to the list of movies in "App.js"
import React, { useState } from "react";
import { InputGroup, FormControl, Button, Modal } from "react-bootstrap";

const AddToTheList = (props) => {
  //for the Modal
  const [show, setShow] = useState(false);
  const handleSave = () => {
    setShow(false);
    props.Add(NewMovie);
  };
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  // Getting the new data from the input
  const [NewMovie, setNewMovie] = useState({
    id: Math.random(),
    title: "Movie Title",
    description: "Proident cillum aliqua duis voluptate excepteur sint duis.",
    posterURL:
      "https://www.seekpng.com/png/detail/137-1379498_work-in-progress.png",
    rating: 0,
  });
  const AddNewMovie = (e) => {
    setNewMovie({ ...NewMovie, [e.target.name]: e.target.value });
  };

  return (
    <div className="Add">
      {console.log(NewMovie)}
      <Button variant="dark" onClick={handleShow}>
        Add A New Movie
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
          <Modal.Title>Movie Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="NewMovie">
            <InputGroup className="mb-3">
              <FormControl
                name="title"
                placeholder="Movie title"
                onChange={AddNewMovie}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                name="description"
                placeholder="Movie description"
                onChange={AddNewMovie}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                name="rating"
                placeholder="Movie rating"
                onChange={AddNewMovie}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                name="posterURL"
                placeholder="Movie poster"
                onChange={AddNewMovie}
              />
            </InputGroup>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddToTheList;
