import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  BsCalendarDate,
  BsFilm,
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsTranslate,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";

import MovieCard from ".././components/MovieCard/MovieCard";

import classes from "./Movie.module.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovie(data);
    console.log(data);
    document.title = `${data.title} - MovieShelf`;
  };

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`;
    getMovie(movieUrl);
  }, []);

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <section className={classes["movie-page"]}>
      {movie && (
        <MovieCard movie={movie} showLink={false}>
          <p className={classes.tagline}>{movie.tagline}</p>
          <div className={classes.format}>
            <div className={classes.info}>
              <h3>
                <BsCalendarDate /> Release Date:
              </h3>
              <p>{movie.release_date}</p>
            </div>
            <div className={classes.info}>
              <h3>
                <BsFilm /> Genres:
              </h3>
              <p>
                {formatCurrency(movie.genres.map((genre) => " " + genre.name))}
              </p>
            </div>
            <div className={classes.info}>
              <h3>
                <BsWallet2 /> Budget:
              </h3>
              <p>{formatCurrency(movie.budget)}</p>
            </div>
            <div className={classes.info}>
              <h3>
                <BsGraphUp /> Revenue:
              </h3>
              <p>{formatCurrency(movie.revenue)}</p>
            </div>
            <div className={classes.info} id={classes.testinho}>
              <h3>
                <BsHourglassSplit /> Runtime:
              </h3>
              <p>{movie.runtime} minutes</p>
            </div>
            <div className={classes.info}>
              <h3>
                <BsTranslate />
                Language:
              </h3>
              <p>{movie.original_language}</p>
            </div>
          </div>
          <div className={classes.description}>
            <h3>
              <BsFillFileEarmarkTextFill /> Overview:
            </h3>
            <p>{movie.overview}</p>
          </div>
        </MovieCard>
      )}
    </section>
  );
};

export default Movie;
