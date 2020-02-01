import React from 'react';
import SearchBar from './components/search-bar-component/search-bar.component';
import SearchResult from './components/search-result-component/search-result.component';

import './App.css';

class App extends React.Component {


  state = {
    searchResults: [],
    discoveredMovies: [],
    query: ''
  }

  async getDiscoverMovies() {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_TMDB_API_KEY}`, {
        crossDomain: true
      });
      const result = await res.json();
      this.setState({
        discoveredMovies: result.results
      });
    }
    catch (err) {
      console.log(err);
    }
  }

  async searchMovies() {
    const { query } = this.state;
    try {
      const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}&api_key=${process.env.REACT_APP_TMDB_API_KEY}`, {
        crossDomain: true
      });
      const result = await res.json();
      this.setState({ searchResults: result.results });
    }
    catch (err) {
      console.log(err);
    }
  }

  onSearchChange = (e) => {
    this.setState({ query: e.target.value }, () => {
      if (this.state.quert !== '') {
        this.searchMovies();
      }

    });
  }

  componentDidMount() {
    this.getDiscoverMovies();
  }

  render() {
    const {query, discoveredMovies, searchResults} = this.state;
    return (
      <div>
        <SearchBar onChange={this.onSearchChange} />
        <SearchResult
          query={query}
          discoveredMovies={discoveredMovies}
          searchResults={searchResults}
        />

      </div>
    )
  }
}

export default App;
