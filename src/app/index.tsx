import * as React from 'react';
import { hot } from 'react-hot-loader';
import './app.scss';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Welcome</h1>
    </header>
    <p className="App-intro">
      To get started, edit <span>src/App.js</span> and save to reload.
    </p>
  </div>
);

export default hot(module)(App);
