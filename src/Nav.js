import React, { Component } from 'react';
import logo from '../images/logo.svg';
import {BrowserRouter as Link} from 'react-router-dom';
import gradients from './gradients.json';

class Nav extends Component {
  constructor(props) {
      super(props);
      this.state = {
          bg:'#fa5b42, #ffb88c',
          gradients:gradients.gradients
      }
  };

  componentWillMount(){
    this.setState({
      bg:this.state.gradients[Math.floor(Math.random()*this.state.gradients.length)]
    })
  }

  render() {
    document.body.style.backgroundImage = `linear-gradient(${this.state.bg})`;
    return (
      <div className="heading">
        <div className="heading-contents">
          <Link to="/">
              <div className="point">
                  <img alt="tile" className="logo button-hover" src={logo} onClick={this.componentWillMount.bind(this)}/>
                  <div className="pointer hvr-bob">☝️
                      <h6>dont touch</h6>
                  </div>
              </div>
          </Link>
          <div className="social">
              <a target="_blank" href="https://github.com/andrewmundy">
                  <i className="fa fa-github button-hover" aria-hidden="true"></i>
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/andrew-mundy/">
                  <i className="fa fa-linkedin-square button-hover" aria-hidden="true"></i>
              </a>
              <a target="_blank" href="https://www.behance.net/andrewmundy">
                  <i className="fa button-big fa-behance-square button-hover" aria-hidden="true"></i>
              </a>
          </div>
      </div>
    </div>
    );
  }
}

export default Nav;
