import React from 'react'

import logo from './logo.svg';
import './App.css';

const LearnReact = () => (
  <div>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p className="App-welcome-text">
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_self"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

export default LearnReact;
