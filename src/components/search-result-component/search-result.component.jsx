import React from 'react';
import './search-result.styles.scss';

const ResultItem = ({posterPath}) => (
  <div className="img-container">
    <img
        src={`${process.env.REACT_APP_API_POSTER_BASE_URL}${posterPath}`}
        onError={(e) => { e.target.src = `https://placekitten.com/320/480`}}
        alt="poster" />
  </div>
);

class SearchResult extends React.Component {

  render() {
    const {query, discoveredMovies, searchResults} = this.props;
    return (
      <div id="results">
        {
          query === '' ?
          discoveredMovies &&
          discoveredMovies.map((movie) => <ResultItem key={movie.id} posterPath={movie.poster_path}/>) :
          searchResults &&
          searchResults.map((movie) => <ResultItem key={movie.id} posterPath={movie.poster_path}/>)
        }
      </div>
    );
  }

}

export default SearchResult;
