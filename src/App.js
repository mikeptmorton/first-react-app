import React, { Component } from 'react';
import HelloWorld from './components/HelloWorld';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Clock from './components/Clock';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Link to="/">Home</Link>
            <Link to="/clock">Clock</Link>

            <Route exact path="/" component={HelloWorld} />
            <Route path="/clock" component={Clock} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
