import React, { useContext } from "react";
import AddToWatchlistButton from "../components/buttons/addToWatchlist";
import PageTemplate from "../components/templateMovieListPage";
import {MoviesContext} from '../contexts/moviesContext'

const MovieNowPlaying = () => {
  const context = useContext(MoviesContext);
  const movies = context.nowPlaying.filter((m) =>{
    return !("watchlist" in m);
  });
  return (
    <PageTemplate
      movies={movies }
      title="Movie Now Playing"
      action={(movie) =>{
        return <AddToWatchlistButton movie={movie} /> 
      }}
    />
  );
};

export default MovieNowPlaying;