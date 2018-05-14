import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
// import { createStore, applyMiddleware } from 'redux';

import Posts from './components/Posts'
import Postform from './components/Postform'
import store from './store';

// A store holds the whole state tree of your application.
// The only way to change the state inside it is to dispatch an action on it.
// A store is not a class. It's just an object with a few methods on it.
// To create it, pass your root reducing function to createStore.

// const store = createStore(() => [], {}, applyMiddleware());
class App extends Component {
  render() {
    return (
      <Provider store={ store }>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Postform />
        <hr/>
        <Posts />
      </div>
      </Provider>

    );
  }
}

export default App;
