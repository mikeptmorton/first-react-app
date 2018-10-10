import React, { Component } from 'react';
import worker from "../worker.js";
import WebWorker from "./workerSetup";
import '../App.css';

class Users extends Component {
  render() {
    return (
      <div className="App-header">
          <p className="text-center">Total User Count: {this.state.count}</p>

          <button className="btn-direct" onClick={fetchUsers}>
            Fetch Users Directly
          </button>

          <button className="btn-worker" onClick={fetchWebWorker}>
            Fetch Users with Web Worker
          </button>
      </div>
    );
  }

  componentDidMount = () => {
    this.worker = new WebWorker(worker);
  };

  fetchUsers = () => {
    const users = [];

    const userDetails = {
      name: "Jane Doe",
      email: "jane.doe@gmail.com",
      id: 1
    };

    for (let i = 0; i < 5000000; i++) {
      userDetails.id = i++;
      userDetails.dateJoined = Date.now();

      users.push(userDetails);
    }

    this.setState({
      count: users.length,
    });
  };

  fetchWebWorker = () => {
    this.worker.postMessage("Fetch Users");

    this.worker.addEventListener("message", event => {
      this.setState({
        count: event.data.length,
      });
    });
  };
}

export default Users;
