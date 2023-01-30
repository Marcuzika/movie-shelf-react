import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";

import classes from "../../pages/Movie.module.css";

const imagesURL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true, children }) => {
  return (
    <li className={classes["movie-card"]} id={classes["movie-page"]}>
      <img src={imagesURL + movie.poster_path} alt=". Image not found" />
      <h2>{movie.title}</h2>
      <p id={classes["icon-star"]}>
        <FaStar /> {movie.vote_average}
      </p>
      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
      {children}
    </li>
  );
};

export default MovieCard;
