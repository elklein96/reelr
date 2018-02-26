import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import NavBar from './NavBar/NavBar';
import Preview from './Preview/Preview';
import MovieDashboard from './MovieDashboard/MovieDashboard';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <Router>
            <div>
              <Route exact path="/" component={ MovieDashboard }/>
              <Route path="/preview/:movie" component={ Preview }/>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
