import React from "react";
import { Card } from "react-bootstrap";

const MovieTrailer = (props) => {
  return (
    <div className="Trailer">
      <Card className="text-center">
        <Card.Header>Watch The Trailer For: {props.title}</Card.Header>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.trailer}
            <hr />

            <h5>Synopsis:</h5>
            <p>{props.description}</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          Rating on IMDB: {props.rating}/10
        </Card.Footer>
      </Card>
    </div>
  );
};

export default MovieTrailer;
