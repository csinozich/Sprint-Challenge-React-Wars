import React, { Component } from 'react';
import Dogs from './components/Dogs'
import './components/Dogs.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      dogBreeds: []
    };
  }

  componentDidMount() {
    this.getDogs('https://dog.ceo/api/breed/hound/list/'
);
  }

  getDogs = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ dogBreeds: data.message });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">Dog Breeds</h1>
        <div className='Dog'>
          {this.state.dogBreeds.map(dog => (
            <Dogs dog={dog} key={this.state.dogBreeds.index} dogBreedInfo = {this.state.dogBreeds} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
