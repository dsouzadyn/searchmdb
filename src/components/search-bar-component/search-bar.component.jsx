import React from 'react';
import './search-bar.styles.scss';

const SearchBar = (props) => (
  <div className="search-bar">
    <input type="text" onChange={props.onChange} placeholder="Type in something..."/>
    <div className="search-button">
      <i className="fa fa-search fa-2x" aria-hidden="true"></i>
    </div>
  </div>
)

export default SearchBar;
