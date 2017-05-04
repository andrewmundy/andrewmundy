import React from 'react'
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

var camsBack = {
  backgroundImage: `url(${camsImg})`,
};
var barBack = {
  backgroundImage: `url(${bartindre})`,
};
var slowBack = {
  backgroundImage: `url(${slow})`,
};

const Home = () => (
  <div>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

// const Cams = ({ match }) => (
//
//   <div className="contents">
//     <h2>CAMS</h2>
//     <h4><i>Computerized Assement of Mental Status</i></h4>
//     <ul>
//       <li>
//         <Link to={`${match.url}/rendering`}>
//           Rendering with React
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/components`}>
//           Components
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>
//           Props v. State
//         </Link>
//       </li>
//     </ul>
//
//     <Route path={`${match.url}/:topicId`} component={Topic}/>
//     <Route exact path={match.url} render={() => (
//       <h3>Please select a topic.</h3>
//     )}/>
//   </div>
// )

const BasicExample = () => (
  <Router>
    <div className="containment">

      <div className="heading">
        <Link to="/" >
          <img className="logo button-hover" src={logo}/>
        </Link>
        <div className="social">
          <a><i className="fa fa-github button-hover" aria-hidden="true"></i></a>
          <a><i className="fa fa-linkedin-square button-hover" aria-hidden="true"></i></a>
        </div>
      </div>
      <div className="splash flex-center">
          <h1>
            Hi I'm Andrew Mundy
          </h1>
      </div>
      <div className="slant-div"/>
      {/* PROJECTS */}
        <div className="contents-container">
          {/* ICONS */}
          <div className="flex-center icons">
            <img src={dev}/>
            <img src={design}/>
          </div>
          <div className="projects flex-center">

            {/* CAMS */}
              <a href="http://cams-ucsf.herokuapp.com/">
                <div className="project-tile button-hover" style={camsBack}>
                  <div>
                    <p className="title">CAMS
                      <div className="description">React Mental Health Communication Platform</div>
                    </p>
                  </div>
                </div>
              </a>

              {/* BARTINDRE */}
                <a href="https://bartindre.herokuapp.com/">
                  <div className="project-tile button-hover" style={barBack}>
                    <div>
                      <p className="title">BARTINDRE
                        <div className="description">Flask Cocktail Recipie Platform</div>
                      </p>
                    </div>
                  </div>
                </a>

                {/* CAMS */}
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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cams" component={cams}/>
          </Switch>
          {/* FOOTER */}
      <div className="slant-div-lower"/>
        <div className="footer">
          <div className="flex-space-around">
            <div className="contact">
              <div><i className="fa fa-user" aria-hidden="true"></i> Andrew Mundy</div>
              <div><i className="fa fa-map-marker" aria-hidden="true"></i> SF CA</div>
              <div><i className="fa fa-mobile" aria-hidden="true"></i> (850)226-9048</div>
              <div><i className="fa fa-envelope" aria-hidden="true"></i> andrewmundy@gmail.com</div>
              <div><i className="fa fa-github" aria-hidden="true"></i> github.com/andrewmundy</div>
              <div><i className="fa fa-linkedin-square" aria-hidden="true"></i> linkedin.com/andrewmundy</div>
              <div><i className="fa fa-glass" aria-hidden="true"></i> Gin Stirred Twist</div>
            </div>
            <div><img className="logo-lower button-hover" src={logo}/></div>
            </div>
        </div>
      </div>
    </div>
  </Router>
)
export default BasicExample
