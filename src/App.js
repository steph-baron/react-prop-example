import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello fname="Surbhi" lname="Sharma"/>
      </div>
    );
  }
}

export default App;
