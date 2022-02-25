import MovieCard from "./MovieCard";
//MovieList gets the movies as props from App.js

const MovieList = ({ movie, name, rating }) => {

  return (
    <div className="MovieList">
      {movie
      .filter((el)=>el.title.toLowerCase().includes(name.toLowerCase())&& el.rating>=rating)
      .map(el =><MovieCard movie={el} key={el.id}/>)}
    </div>
  );
};

export default MovieList;
