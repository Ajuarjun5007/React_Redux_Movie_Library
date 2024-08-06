import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../Redux/MovieReducer/action';
import MovieCard from './MovieCard';
import './MovieList.css';
import { useLocation, Link } from 'react-router-dom';

const MovieList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  
  const { movies, isLoading, isError } = useSelector(state => state.movies);
  
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const ratingFilters = searchParams.getAll('rating').map(Number);
    const sortOrder = searchParams.get('order') || 'asc';

    dispatch(fetchMovies({ ratingFilters, sortOrder }));
  }, [dispatch, location.search]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading movies</div>;
  }

 
  

  return (
    <div data-testid="movie-list" className="movie-list">
      {movies.length > 0 ? (
        movies.map(movie => (
          <Link  key={movie.id} to={`/movie/${movie.id}`} className="movie-link">
            <MovieCard movie={movie} />
          </Link>
        ))
      ) : (
        <div>No movies available</div>
      )}
    </div>
  );
};

export default MovieList;
