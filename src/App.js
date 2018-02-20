import React, { Component } from 'react';
import { API } from 'aws-amplify';

import logo from './logo.svg';
import './App.css';


class App extends Component {
  state = { email: '', message: '' };

  subscribeUser = async event => {
    event.preventDefault();
    let apiName = 'subscribersCRUD';
    let path = '/subscribers';
    let myInit = {
        body: { email: this.state.email }
    }
    try {
      const res = await API.post(apiName, path, myInit);
      this.setState({ message: res.error || res.success })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Enter your email below to subscribe to our email list.
        </p>
        <form onSubmit={this.subscribeUser}>
          <label>Email address : </label>
          <input
            value={this.state.email}
            onChange={event => this.setState({ email: event.target.value })}
          />
          <button>subscribe</button>
        </form>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default App;
