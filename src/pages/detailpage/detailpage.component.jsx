import React from 'react';
import './detailpage.styles.scss';

class DetailPage extends React.Component {

  state = {
    movieResult: {}
  }

  getMovieDetails(id) {
    return fetch(`${process.env.REACT_APP_API_BASE_URL}/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`, {
      crossDomain: true
    }).then((res) => res.json())
    .then((result) => {
      this.setState({
        movieResult: result
      });
    })
    .catch((err) => {
      console.error(err)
    });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.getMovieDetails(id);
  }

  render() {
    const {movieResult} = this.state;
    if (movieResult.poster_path) {
      return (
        <div
        className="detail-container"
        style={{backgroundImage: `url(${process.env.REACT_APP_API_BACKDROP_BASE_URL}${movieResult.backdrop_path})`}}>
          <div className="movie-info">
            <div className="movie-media">
              <img
                src={`${process.env.REACT_APP_API_POSTER_BASE_URL}${movieResult.poster_path}`}
                onError={(e) => { e.target.src = `https://placekitten.com/320/480`}}
                alt="poster" />
              <span>{movieResult.vote_average}</span>
            </div>
            <div className="movie-details">
              <h1>{movieResult.title}</h1>
              <h4>-- "{movieResult.tagline}"</h4>
              <div className="genre-list">
                {movieResult.genres && movieResult.genres.map((genre)=> <span key={genre.id} className="genre-pill">{genre.name}</span>)}
              </div>
              <p className="description">{movieResult.overview}</p>
              <a href={movieResult.homepage} className="movie-link">{movieResult.homepage}</a>
              <p className="runtime">Movie Time: {movieResult.runtime} minutes</p>
            </div>
          </div>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default DetailPage;
