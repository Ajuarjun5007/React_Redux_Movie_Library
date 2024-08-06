import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MovieDetail = () => {
  const { id } = useParams();
  const movie = useSelector(state => state.movies.movies.find(m => m.id === parseInt(id)));

  if (!movie) return <p>Movie not found.</p>;

  return (
    <div>
      <h3 className="movie-id">{movie.id}</h3>
      <img src={movie.Poster} alt={movie.Title} className="movie-image" />
      <p className="movie-name">{movie.Title}</p>
      <p className="movie-year">{movie.Year}</p>
      <p className="movie-type">{movie.Type}</p>
      <p className="movie-rating">{movie.rating}</p>
    </div>
  );
};

export default MovieDetail;
