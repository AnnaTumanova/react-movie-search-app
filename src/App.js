import React from 'react';
import './App.css';
import './SearchMovies.js'
import SearchMovies from './SearchMovies.js';

class App extends React.Component {
  render(){
    return(
      <div className="container">
        <h1 className="title">Search for the movie with React!</h1>
        <SearchMovies/>
      </div>
    )
  }
}

export default App;
