import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect, Provider } from 'react-redux';
import { bindActionCreators } from 'redux';
import { store } from './store';
import Calculate from './components/Calculate';
import Feed from './components/Feed'

class App extends Component {


  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>

          <Calculate/>

          <Feed/>
          

        </div>
      </Provider>
    );
  }
}

export default App;
