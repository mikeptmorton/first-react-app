import React, { Component } from 'react';
import logo from './assets/logo.svg';
import Button from '@material-ui/core/Button';
import Clock from './components/Clock';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <Button variant="contained" color="primary">
            Hello World
          </Button>

          <Clock />
        </header>
      </div>
    );
  }
}

export default App;
