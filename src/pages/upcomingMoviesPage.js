import React, { useEffect, useState } from "react";
import { getUpcomingMovies } from "../api/tmdb-api";
import AddToWatchlistButton from "../components/buttons/addToWatchlist";
import PageTemplate from "../components/templateMovieListPage";





const UpcomingMoviesPage = () => {
  
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getUpcomingMovies().then(movies => {
      setMovies(movies);
    });
  }, []);

  return (
    <PageTemplate
      movies={ movies }
      title="Upcoming Movies"
      action={(movie) =>{
        return <AddToWatchlistButton movie={movies} /> 
      }}
    />
  );
};

export default UpcomingMoviesPage;