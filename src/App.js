import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameDetails from './components/gameDetails'
import Players from './components/players'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Gianni's react redux app!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <GameDetails gameDetails={this.props.gameDetails}/>
        <Players players={this.props.players}/>
      </div>
    );
  }
}

export default App;
