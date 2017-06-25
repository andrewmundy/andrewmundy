import React, {Component} from 'react';
import './App.css';
import under from '../images/guy.svg';

class UnderConstruction extends Component {
  render(){
    return(
      <div className="flex-center">
        <img className="under" src={under}/>
        <div className="text-shadow underconstruction">
          <h1 className="title">
            The things? Where are thems!?
          </h1>
          <div className="blurb blurb-well">
            <h3>
              <i>Hey, s'all Good</i>
            </h3>

            <p>
              I've been working really hard on wrapping up v2 of andrewmundy-dot-net. So please check back soon because I have some really cool things that I can't wait to show y'all.
            </p>
            <h1>
              <a target="_blank" href="https://github.com/andrewmundy">
                <i className="fa button-big fa-github button-hover" aria-hidden="true"></i>
              </a>
              <a target="_blank" href="https://www.behance.net/andrewmundy">
                <i className="fa button-big fa-behance-square button-hover" aria-hidden="true"></i>
              </a>
            </h1>
            <p className="">
              But while you're here why don't you check out my <a className="link" href="https://github.com/andrewmundy"> github </a> or <a className="link" href="https://www.behance.net/andrewmundy">behance</a>?
            </p>
          <h1>🌴🤓🌴</h1>
        </div>

      </div>
    </div>
    )
  }
};

export default UnderConstruction;
