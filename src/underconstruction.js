import React, {Component} from 'react';
import './App.css';
import Under from '../images/Under.png';

class UnderConstruction extends Component {
  render(){
    return(
      <div className="flex-center">
        <img className="under" src={Under}/>
        <div className="blurb">
          <h1 className="header">
            😱 Wait! Where are all of the things?! 😱
          </h1>
          <h2>
            <i>everything's cool, don't worry</i>
          </h2>
          <p>
            I have been working really hard on wrapping up v2 of andrewmundy.net. So please check back soon because I have some really cool things planned for ya'll and I can't wait to show you what I've been up to.
          </p>
        </div>
      </div>
    )
  }
};

export default UnderConstruction;
