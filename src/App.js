import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello fname="Surbhi" lname="Sharma"/>
        <Turkey food="Bahn Mi" utensil="spork" celebrity="Madonna"/>
      </div>
    );
  }
}

export default App;
