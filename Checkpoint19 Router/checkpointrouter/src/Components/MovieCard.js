import { Card, Modal } from "react-bootstrap";
import MovieTrailer from "./MovieTrailer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

//Moviecard formats the data of a movie into a neat card
const MovieCard = (props) => {
  return (
    <div className="MovieCard">
      <Card style={{ width: "18rem", height: "50rem" }}>
        <Card.Img
          variant="top"
          src={props.movie.posterURL}
          alt="Poster"
          style={{ width: "18rem", height: "25rem", textAlign: "center" }}
        />
        <Card.Body>
          <Card.Title className="text-danger">
            <Link to={`/description/${props.movie.id}`}>{props.movie.title}</Link>
          </Card.Title>
          <hr />
          <Card.Text className="text-muted">
            {props.movie.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{ height: "4rem" }}>
            <small className="text-muted">
              IMDB Rating: {props.movie.rating}/10
            </small>
        </Card.Footer>
      </Card>
      
    </div>
  );
};

export default MovieCard;
