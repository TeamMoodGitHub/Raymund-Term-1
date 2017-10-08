import React, { Component } from 'react';
import { Main } from './Components/MainComponent';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <div className="header">
          <h1 className="explorcity"> EXPLORCITY </h1>
        </div>
        <Main/>
      </div>
    );
  }
}



export default App;
