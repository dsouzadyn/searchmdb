import React from 'react';
import ResultItem from '../result-item-component/result-item.component';
import './search-result.styles.scss';

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
            movieId={movie.id}
            movieRating={movie.vote_average}/>) :
            searchResults &&
            searchResults.map((movie) => <ResultItem
            key={movie.id}
            posterPath={movie.poster_path}
            movieTitle={movie.title}
            movieOverview={movie.overview}
            movieId={movie.id}
            movieRating={movie.vote_average}/>)
          }
        </div>
        <button onClick={onLoadMore} className={searchResults && searchResults.length > 0 ? "load-more" : "load-more is-hidden"}>Load More</button>
      </div>
    );
  }

}

export default SearchResult;
