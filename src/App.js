import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Main from './main.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route component={Main} />
        </Switch>
      </div>
    );
  }
}

export default App;
