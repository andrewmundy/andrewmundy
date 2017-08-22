import React, {Component} from 'react';
import logo from '../images/logo.svg';

class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <div className="footing">
          <div className="contact">
            <div>
              <a target="_blank" href="https://www.google.com/maps/search/soma/@37.7808154,-122.4111944,15z/data=!3m1!4b1" className="button-hover">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                San Francisco CA</a>
            </div>
            <div>
              <a target="_blank" href="tel:+1-850-226-9048" className="button-hover">
                <i className="fa fa-mobile" aria-hidden="true"></i>
                +1 (850)226-9048</a>
            </div>
            <div>
              <a target="_blank" href="mailto:andrewmundy@gmail.com" className="button-hover">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                andrewmundy@gmail.com</a>
            </div>
            <div>
              <a target="_blank" href="https://github.com/andrewmundy" className="button-hover">
                <i className="fa fa-github" aria-hidden="true"></i>
                github.com/andrewmundy</a>
            </div>
            <div>
              <a target="_blank" href="https://www.linkedin.com/in/andrew-mundy/" className="button-hover">
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                linkedin.com/andrewmundy</a>
            </div>
            <div>
              <a target="_blank" href="http://www.ginfoundry.com/cocktail/martini-cocktail/" className="button-hover">
                <i className="fa fa-glass shake" aria-hidden="true"></i>
                Gin Stirred Twist</a>
            </div>
          </div>
          {/* <img alt="logo" className="logo-lower button-hover" src={logo}/> */}
          <div className="resume">
            <a target="_blank" href="https://dochub.com/andrewmundy12b2b5a8/4LRNEq/andrewmundyresume5-22?dt=ztdr2u7n9mawibe7">
              <i className="fa fa-file-text" aria-hidden="true"></i>
              <p>I'm looking to join a team! 😎</p>
            </a>
          </div>
        </div>
        <div className="copy">© Andrew Mundy 1988</div>
      </div>
    )
  }
};

export default Footer;
