import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from ".././components/MovieCard/MovieCard";

import classes from "./MovieGrid.module.css";

const searchUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [searchParams] = useSearchParams();

  const [searchedMovies, setSearchedMovies] = useState([]);
  const query = searchParams.get("q");

  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setSearchedMovies(data.results);
    document.title = `${query} - MovieShelf`;
  };

  useEffect(() => {
    const searchWithQueryUrl = `${searchUrl}?${apiKey}&query=${query}`;

    getSearchedMovies(searchWithQueryUrl);
  }, [query]);

  const listSearchedMovies = searchedMovies.map((movie) => (
    <MovieCard key={movie.id} movie={movie} />
  ));

  return (
    <section className={classes.container}>
      <h2 className={classes.title}>
        Results for: <span className={classes["query-text"]}>{query}</span>
      </h2>
      {listSearchedMovies.length > 0 ? (
        <ul className={classes["movies-container"]}>{listSearchedMovies}</ul>
      ) : (
        <p className={classes["search-message"]}>
          There are no movies that matched your query.{" "}
        </p>
      )}
    </section>
  );
};

export default Search;
