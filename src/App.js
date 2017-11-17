import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Hello from './Hello'
import Turkey from './Turkey'
import Guests from './Guests'

const guestsData = [
  { id: 1, name: "Sam"},
  { id: 2, name: "Banu"},
  { id: 3, name: "Ricky"}
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello fname="Surbhi" lname="Sharma"/>
        <Turkey food="Bahn Mi" utensil="spork" celebrity="Madonna" />
        <Guests people={ guestsData } />
      </div>
    );
  }
}

export default App;
