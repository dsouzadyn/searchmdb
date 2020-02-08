import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import DetailPage from './pages/detailpage/detailpage.component';

import './App.css';


class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/movie/:id" component={DetailPage}/>
          <Route exact path="/" component={HomePage}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
