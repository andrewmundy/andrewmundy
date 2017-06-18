import React, {Component} from 'react';
import {
  Route
} from 'react-router-dom';
import './App.css';
import Home from './Home.js';
import Nav from './Nav.js';
import UnderConstruction from './underconstruction.js';
import Footer from './footer.js';

class Main extends Component {
  render() {
    return (
      <div className="body">
        <div className="fakebody ">
          <div className="containment">
            <Nav className="nav"/>
            <UnderConstruction/>
            {/* <Route className="user_header" exact path="/" component={Home} /> */}
            <Footer/>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
