import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import Button from '@material-ui/core/Button';
import Clock from './Clock';
import '../App.css';

class HelloWorld extends Component {
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Button variant="contained" color="primary">
          Hello World
        </Button>

        <Clock />
      </div>
    );
  }
}

export default HelloWorld;
