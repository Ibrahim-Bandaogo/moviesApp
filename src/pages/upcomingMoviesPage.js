import React, { useEffect, useState } from "react";
import StubAPI from "../api/stubAPI";
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";


const UpcomingMoviesPage = () => {
  const toDo = () => true;
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getUpcomingMovies().then(movies => {
      setMovies(movies);
    });
  }, []);

  return (
    <PageTemplate
      movies={ movies }
      title={"Upcoming Movies"}
      buttonHandler={toDo}
    />
  );
};

export default UpcomingMoviesPage;