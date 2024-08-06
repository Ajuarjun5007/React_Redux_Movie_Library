import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css'
const MovieCard = ({ movie }) => (
  <div className='movie-card'>

  <div className="image-container">
    <Link to={`/movie/${movie.id}`}>
      <img src={movie.Poster} alt={movie.Title} className="movie-image" />
    </Link>
    <div className='movie-details'>
    <p className="movie-name">{movie.Title}</p>
    <p className="movie-year">{movie.Year}</p>
    <p className="movie-type">{movie.Type}</p>
    <p className="movie-rating">{movie.rating}</p>
    </div>
  </div>
  </div>
);

export default MovieCard;
