import React, { useEffect, useState } from "react";
import { getUpcomingMovies } from "../api/tmdb-api";
import AddToFavoriteButton from "../components/buttons/addToFavorites";
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
        return <AddToFavoriteButton movie={movies} /> 
      }}
    />
  );
};

export default UpcomingMoviesPage;