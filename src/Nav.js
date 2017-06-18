import React, { Component } from 'react';
import logo from '../images/logo.svg';
import {BrowserRouter as Link} from 'react-router-dom'

class Nav extends Component {
  constructor(props) {
      super(props);
      this.state = {
          bg:'#fa5b42, #ffb88c'
      }
  };
  componentWillMount(){
    let gradients = [
      '200deg, #84fab0 0%,#8fd3f4 100%',
      '120deg, #fa5b42, #ffb88c',
      '100deg, #ddd6f3, #faaca8',
      '135deg, #00d8ff 0%, #7db9e8 100%',
      '135deg, rgb(151, 70, 214), #30E8BF',
      '135deg, #ffafbd, #ffc3a0',
      '135deg, #16222a, #3a6073',
      '135deg, #cc95c0, #dbd4b4, #7aa1d2'
    ];

    this.setState({
      bg:gradients[Math.floor(Math.random()*gradients.length)]
    })
  }

  handleClick(e){
    let gradients = [
      '200deg, #84fab0 0%,#8fd3f4 100%',
      '120deg, #fa5b42, #ffb88c',
      '100deg, #ddd6f3, #faaca8',
      '135deg, #00d8ff 0%, #7db9e8 100%',
      '135deg, rgb(151, 70, 214), #30E8BF',
      '135deg, #ffafbd, #ffc3a0',
      '135deg, #16222a, #3a6073',
      '135deg, #cc95c0, #dbd4b4, #7aa1d2'
    ];

    this.setState({
      bg:gradients[Math.floor(Math.random()*gradients.length)]
    })
  }

  render() {

    document.body.style.backgroundImage = `linear-gradient(${this.state.bg})`;

    return (
      <div className="heading">
        <div className="heading-contents">
          <Link to="/">
              <div className="point">
                  <img alt="tile" className="logo button-hover" src={logo} onClick={this.handleClick.bind(this)}/>
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
          </div>
      </div>
    </div>
    );
  }
}

export default Nav;
