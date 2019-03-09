import React, { Component } from 'react';
import './App.css';
import Character from './components/Dogs'
import './components/Dogs.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      dogBreeds: []
    };
  }

  componentDidMount() {
    this.getDogs('https://dog.ceo/api/breeds/list/all'
);
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ dogBreeds: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">Dog Breeds</h1>

      </div>
    );
  }
}

export default App;
