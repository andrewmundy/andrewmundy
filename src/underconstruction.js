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
          <i>Everything's cool, don't worry.</i>
          <p>
            I've been working really hard on wrapping up v2 of andrewmundy dot net. So please check back soon because I have some really cool things that I can't wait to show y'all.
          </p>
          <h1>🌴🤓🌴</h1>
        </div>
      </div>
    </div>
    )
  }
};

export default UnderConstruction;
