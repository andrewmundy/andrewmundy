import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from 'react-router-dom'
import logo from '../images/logo.svg';
import bartindre from '../images/bartindre.png';
import camsImg from '../images/cams.png';
import slow from '../images/slow.png';
import dev from '../images/Dev.svg';
import design from '../images/Design.svg';
import cams from './cams';
import trop1 from '../images/trop1.jpg';
import trop2 from '../images/trop2.jpg';
import trop3 from '../images/trop3.jpg';
import trop4 from '../images/trop4.jpg';
import avatar from '../images/avatar.PNG';
import cactus from '../images/cactux.gif';

class MainContent extends Component {
  constructor(props){
    super(props);
    this.state = {
      isClicked:0
    }
  };

  // onClick(isClicked){
  //   this.setState((prevState) => ({
  //     if(isClicked === 1){
  //       isClicked: prevState.isClicked = 0;
  //     }else if (isClicked === 0){
  //       isClicked: prevState.isClicked = 1;
  //     }
  //   }));
  // }

  render(){
    let cactusBack = {
      backgroundImage:`url(${cactus})`,
    }
    let camsBack = {
      backgroundImage: `url(${camsImg})`,
    };

    let barBack = {
      backgroundImage: `url(${bartindre})`,
    };

    let slowBack = {
      backgroundImage: `url(${slow})`,
    };
    let back1 = {backgroundImage:`linear-gradient(200deg, #84fab0 0%,#8fd3f4 100%)`,};
    let back2 = {backgroundImage:`linear-gradient(120deg, #fa5b42, #ffb88c)`,};
    let back3 = {backgroundImage:`linear-gradient(100deg, #ddd6f3, #faaca8)`,};
    let back4 = {backgroundImage:`linear-gradient(135deg, #00d8ff 0%, #7db9e8 100%)`,};
    // let back5 = {backgroundImage:`url(${trop1}) no-repeat center center fixed`,};
    // let back6 = {backgroundImage:`url(${trop2}) no-repeat center center fixed`,};
    // let back7 = {backgroundImage:`url(${trop3}) no-repeat center center fixed`,};
    // let back8 = {backgroundImage:`url(${trop4}) no-repeat center center fixed`,};
    let bgRand = [back1,back2,back3,back4];

    let bg = bgRand[Math.floor(Math.random()*5)];


    return(
    <div className="fakebody" style={bg}>
      <div className="containment" >

        <div className="heading">
          <Link to="/">
            <div className="point">
              <img className="logo button-hover" src={logo}/>
              <div className="pointer hvr-bob">☝️
                <h6>dont touch</h6>
              </div>
          </div>
          </Link>
          <div className="social">
            <a href="https://github.com/andrewmundy"><i className="fa fa-github button-hover" aria-hidden="true"></i></a>
            <a href="https://www.linkedin.com/in/andrew-mundy/"><i className="fa fa-linkedin-square button-hover" aria-hidden="true"></i></a>
          </div>
        </div>
        <div className="splash flex-center">
            <h1 className="">
              Hi I'm Andrew Mundy
            </h1>

            <img className="avatar" src={avatar}/>

            <p>Full-Stack software engineer with an emphasis on engaging design and friendly UX/UI</p>
        </div>
        {/* ICONS */}
        <div className="flex-center icons" onClick={this.onClick}>
          <div>
            <img className="icon" src={dev}/>
          </div>
        </div>
        {/* BODY */}
          <div className="contents-container dev">

            <div className="content">
              <h2 className="what">Dev</h2>
              {/* PROJECTS */}

              {/* CAMS */}
              <div className="info">
                <div>
                  <a href="http://cams-ucsf.herokuapp.com/">
                    <div className="project-tile button-hover" style={camsBack}>
                      <div>
                        <p className="title">CAMS
                          <div className="description">React Mental Health Communication Platform</div>
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="info-text">
                  <h2>UCSF CAMS</h2>
                  <p>While working for UCSF I was responsable for developing tools to reach users of all devices. My team built CAMS from the ground up to help doctors diagnose mental illness in incoming patients.  CAMS makes the assessment process asynchronous and allows doctors to view patients on their own time.
                    <p>React | Python</p>
                  </p>
                </div>
              </div>

                {/* BARTINDRE */}
                <div className="info">
                  <div className="info-text">
                    <h2>Bartindre</h2>
                    <p>Social network for creating, sharing, rating and saving cocktail recipes in an engaging and playful way.</p>
                    <p>Python | Flask | Jinja2 | PostgreSQL</p>
                  </div>
                  <div>
                    <a href="https://bartindre.herokuapp.com/">
                      <div className="project-tile button-hover" style={barBack}>
                        <div>
                          <p className="title">BARTINDRE
                            <div className="description">Flask Cocktail Recipie Platform</div>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* SLOW */}
                <div className="info">
                  <div>
                    <a href="http://slowcrmv2.herokuapp.com/">
                      <div className="project-tile button-hover" style={slowBack}>
                        <div>
                          <p className="title">SLOW
                            <div className="description">Flask Customer Relationship Manager</div>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="info-text">
                    <h2>SLOW CRM</h2>
                    <p>This CRM was built for Slow Ventures, a venture capital firm run by ex Facebook Executives. I worked as part of a 4 person team and implemented many Front and Back-End features.</p>
                    <p>Javascript | JQuery | Python | Flask</p>
                  </div>
                </div>
            </div>
            <Switch>
              {/* <Route exact path="/" component={Home} /> */}
              {/* <Route path="/cams" component={cams}/> */}
            </Switch>
        </div>

        <div className="design">
          <div className="flex-center icons" onClick={this.onClick}>
            <div>
              <img className="icon" src={design}/>
            </div>
          </div>

            <div className="contents-container dev">
              <div className="content">
                <h2 className="what">Design</h2>
                {/* PROJECTS */}

                {/* CACTUS */}
                <div className="info">
                  <div className="transparent">
                    <a href="https://www.behance.net/gallery/43147761/Nopal-en-Movimiento">
                      <div className="project-tile button-hover" style={cactusBack}>
                      </div>
                    </a>
                  </div>
                  <div className="info-text">
                    <h2>Nopal en Movimiento</h2>
                    <p>Commisioned work that involved designing and animating several cactus characters for use in a unity project.
                      <p>Illustrator | Photoshop</p>
                    </p>
                  </div>
                </div>

                  {/* BARTINDRE */}
                  <div className="info">
                    <div className="info-text">
                      <h2>Bartindre</h2>
                      <p>Social network for creating, sharing, rating and saving cocktail recipes in an engaging and playful way.</p>
                      <p>Python | Flask | Jinja2 | PostgreSQL</p>
                    </div>
                    <div>
                      <a href="https://bartindre.herokuapp.com/">
                        <div className="project-tile button-hover" style={barBack}>
                          <div>
                            <p className="title">BARTINDRE
                              <div className="description">Flask Cocktail Recipie Platform</div>
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* SLOW */}
                  <div className="info">
                    <div>
                      <a href="http://slowcrmv2.herokuapp.com/">
                        <div className="project-tile button-hover" style={slowBack}>
                          <div>
                            <p className="title">SLOW
                              <div className="description">Flask Customer Relationship Manager</div>
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="info-text">
                      <h2>SLOW CRM</h2>
                      <p>This CRM was built for Slow Ventures, a venture capital firm run by ex Facebook Executives. I worked as part of a 4 person team and implemented many Front and Back-End features.</p>
                      <p>Javascript | JQuery | Python | Flask</p>
                    </div>
                  </div>
              </div>
          </div>
        </div>
        {/* FOOTER */}
        <div className="footer">
          <div className="footing">
            <div className="contact">
              <div><a href="https://www.google.com/maps/search/soma/@37.7808154,-122.4111944,15z/data=!3m1!4b1"><i className="fa fa-map-marker" aria-hidden="true"></i> San Francisco CA</a></div>
              <div><i className="fa fa-mobile" aria-hidden="true"></i> <a href="tel:+1-850-226-9048">+1 (850)226-9048</a></div>
              <div><i className="fa fa-envelope" aria-hidden="true"></i> <a href="mailto:andrewmundy@gmail.com">andrewmundy@gmail.com</a></div>
              <div><i className="fa fa-github" aria-hidden="true"></i> <a href="https://github.com/andrewmundy">github.com/andrewmundy</a></div>
              <div><i className="fa fa-linkedin-square" aria-hidden="true"></i> <a href="https://www.linkedin.com/in/andrew-mundy/">linkedin.com/andrewmundy</a></div>
              <div><i className="fa fa-glass" aria-hidden="true"></i> <a href="http://www.ginfoundry.com/cocktail/martini-cocktail/">Gin Stirred Twist</a></div>
            </div>
            <div><img className="logo-lower button-hover" src={logo}/></div>
          </div>
          <div className="copy">© Andrew Mundy 1988</div>
        </div>
      </div>
    </div>
)
}
}
export default MainContent;
