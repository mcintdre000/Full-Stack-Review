import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import Header from './Header.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {routes}
      </div>
    );
  }
}

export default App;
