import { Card } from "react-bootstrap";
//Moviecard formats the data of a movie into a neat card 

const MovieCard = (props) => {
  return (
    <div className="MovieCard">
      <Card style={{ width: '18rem', height: '50rem'  }}>
        <Card.Img variant="top" src={props.movie.posterURL} alt="Poster"style={{ height: '25rem' }}/>
        <Card.Body>
          <Card.Title className="text-danger">{props.movie.title}</Card.Title>
          <hr/>
          <Card.Text className="text-muted"  style={{ height: '15rem' }}>
           {props.movie.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">IMDB Rating: {props.movie.rating}/10</small>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default MovieCard;
