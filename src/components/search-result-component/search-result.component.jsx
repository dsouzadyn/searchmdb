import React from 'react';
import './search-result.styles.scss';

const ResultItem = ({posterPath, movieTitle, movieOverview, movieRating}) => (
  <div className="img-container">
    <img
        src={`${process.env.REACT_APP_API_POSTER_BASE_URL}${posterPath}`}
        onError={(e) => { e.target.src = `https://placekitten.com/320/480`}}
        alt="poster" />
    <div className="movie-details">
      <span>{movieRating}</span>
      <h3>{movieTitle}</h3>
      <p>{movieOverview.length > 100 ? movieOverview.substring(0, 97) + '...' : movieOverview}</p>
    </div>
  </div>
);

class SearchResult extends React.Component {

  render() {
    const {query, discoveredMovies, searchResults, onLoadMore} = this.props;
    return (
      <div>
        <div id="results">
          {
            query === '' ?
            discoveredMovies &&
            discoveredMovies.map((movie) => <ResultItem
            key={movie.id}
            posterPath={movie.poster_path}
            movieTitle={movie.title}
            movieOverview={movie.overview}
            movieRating={movie.vote_average}/>) :
            searchResults &&
            searchResults.map((movie) => <ResultItem
            key={movie.id}
            posterPath={movie.poster_path}
            movieTitle={movie.title}
            movieOverview={movie.overview}
            movieRating={movie.vote_average}/>)
          }
        </div>
        <button onClick={onLoadMore} className={searchResults && searchResults.length > 0 ? "load-more" : "load-more is-hidden"}>Load More</button>
      </div>
    );
  }

}

export default SearchResult;
