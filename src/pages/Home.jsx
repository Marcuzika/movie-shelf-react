import { useState, useEffect } from "react";
import MovieCard from ".././components/MovieCard/MovieCard";

import classes from "./MovieGrid.module.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    getTopRatedMovies(topRatedUrl);
    document.title = "MovieShelf";
  }, []);

  const listTopMovies = topMovies.map((movie) => (
    <MovieCard key={movie.id} movie={movie} />
  ));

  return (
    <section className={classes.container}>
      <h2 className={classes.title}>Top Rated Movies</h2>
      {topMovies.length > 0 && (
        <ul className={classes["movies-container"]}>{listTopMovies}</ul>
      )}
    </section>
  );
};

export default Home;
