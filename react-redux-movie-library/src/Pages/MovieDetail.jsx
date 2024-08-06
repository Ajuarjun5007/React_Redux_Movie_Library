import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaStar, FaRegStar } from 'react-icons/fa';
import './MovieDetail.css';

const MovieDetail = () => {
  const { id } = useParams();
  const movies = useSelector(state => state.movies.movies);
  
  const movie = movies.find(m => String(m.id) === id);

  if (!movie) return <p>Movie not found.</p>;

  const renderRating = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="star" />);
      }
    }
    return stars;
  };

  return (
    <div className='Movie-detail-container'>
      <h3 className="movie-id">{movie.id}</h3>
      <img src={movie.Poster} alt={movie.Title} className="movie-image" />
      <div className='Movie-description'>
        <p className="movie-name">{movie.Title}</p>
        <p className="movie-year">Release Year: {movie.Year}</p>
        <p className="movie-type">Type: {movie.Type}</p>
        <p className="movie-rating">Rating: {renderRating(movie.rating)}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
