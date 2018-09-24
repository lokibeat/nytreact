import React, { Component } from 'react';

import './App.css';
import Placeholder from "./components/Placeholder/placeholder"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
         <Placeholder text="Hello World"> test text </Placeholder>
        </p>
      </div>
    );
  }
}

export default App;
