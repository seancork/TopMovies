import Router, { Route } from "react-browser-router";
import React, { Component } from 'react';
import './App.css';

import Home from './components/HomePage';
import MovieDetails from './components/MovieDetails';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <div className="App-header">
          <h2>Top Movies</h2>
          <hr />
        </div>
       <div className="container">
        <Route exact path="/" component={Home} />
        <Route exact path="/MovieDetails/:Id" component={MovieDetails} />
       </div>
       </div>
       </Router>
    );
  }
}
export default App;