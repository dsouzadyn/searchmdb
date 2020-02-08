import React from 'react';
import { Link } from 'react-router-dom';

const ResultItem = ({posterPath, movieTitle, movieOverview, movieRating, movieId}) => (
  <div className="img-container">
    <img
        src={`${process.env.REACT_APP_API_POSTER_BASE_URL}${posterPath}`}
        onError={(e) => { e.target.src = `https://placekitten.com/320/480`}}
        alt="poster" />
    <div className="movie-details">
      <span>{movieRating}</span>
      <h3>{movieTitle}</h3>
      <p>{movieOverview.length > 100 ? movieOverview.substring(0, 97) + '...' : movieOverview}</p>
      <Link to={`/movie/${movieId}`}>View More</Link>
    </div>
  </div>
);

export default ResultItem;
