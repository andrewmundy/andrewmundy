import React, {Component} from 'react';
import './App.css';
import Under from '../images/char.png';

class UnderConstruction extends Component {
  render(){
    return(
      <div className="flex-center">
        <img className="under" src={Under}/>
        <div className="text-shadow">
          <h1 className="title">
            The things?! Where are they?
          </h1>
          <div className="blurb">
          <i>Everything's cool, don't worry.</i>
          <p>
            I've been working really hard on wrapping up v2 of andrewmundy dot net. So please check back soon because I have some really cool things that I can't wait to show y'all.
          </p>
          🌴🤓🌴
        </div>
      </div>
    </div>
    )
  }
};

export default UnderConstruction;
