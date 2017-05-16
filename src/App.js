import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect, Link} from 'react-router-dom'

import logo from '../images/logo.svg';
import bartindre from '../images/bartindre.gif';
import camsImg from '../images/cams.png';
import slow from '../images/slow.png';
import dev from '../images/Dev.svg';
import design from '../images/Design.svg';
import cams from './cams';
import avatar from '../images/avatar.PNG';
import cactus from '../images/cactux.gif';
import art from '../images/art.gif';
import stroke from '../images/stroke.svg';
import poke from '../images/pokequotes.gif';

class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: 0
        }
    };

    render() {
        let artBack = {
            backgroundImage: `url(${art})`
        }
        let pokeBack = {
            backgroundImage: `url(${poke})`
        }
        let cactusBack = {
            backgroundImage: `url(${cactus})`
        }
        let camsBack = {
            backgroundImage: `url(${camsImg})`
        };

        let barBack = {
            backgroundImage: `url(${bartindre})`
        };

        let slowBack = {
            backgroundImage: `url(${slow})`
        };

        let back1 = {
            backgroundImage: `linear-gradient(200deg, #84fab0 0%,#8fd3f4 100%)`
        };
        let back2 = {
            backgroundImage: `linear-gradient(120deg, #fa5b42, #ffb88c)`
        };
        let back3 = {
            backgroundImage: `linear-gradient(100deg, #ddd6f3, #faaca8)`
        };
        let back4 = {
            backgroundImage: `linear-gradient(135deg, #00d8ff 0%, #7db9e8 100%)`
        };
        let back5 = {
          backgroundImage: `linear-gradient(135deg, rgb(151, 70, 214), #30E8BF)`
        }
        let back6 = {
            backgroundImage: `linear-gradient(135deg, #ffafbd, #ffc3a0)`
        }
        let back7 = {
            backgroundImage: `linear-gradient(135deg, #16222a, #3a6073)`
        }
        let back8 = {
            backgroundImage: `linear-gradient(135deg, #cc95c0, #dbd4b4, #7aa1d2)`
        }

        let bgRand = [back1, back2, back3, back4, back5, back6, back7, back8];

        let bg = bgRand[Math.floor(Math.random() * 9)];
        return (
            <div className="fakebody" style={bg}>
                <div className="containment">

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
                            <a target="_blank" href="https://github.com/andrewmundy">
                                <i className="fa fa-github button-hover" aria-hidden="true"></i>
                            </a>
                            <a target="_blank" href="https://www.linkedin.com/in/andrew-mundy/">
                                <i className="fa fa-linkedin-square button-hover" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                    <div className="splash flex-center">
                        <h1 className="">
                            Hi I'm Andrew Mundy
                        </h1>

                        <img className="avatar" src={avatar}/>
                    </div>
                    <div className="quote">
                        <img className="stroke" src={stroke}/>
                        <p className="line">Full-Stack software engineer with an emphasis on delicious design and friendly UX/UI</p>
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
                                    <a target="_blank" href="http://cams-ucsf.herokuapp.com/">
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
                                    <p>While working for UCSF I was responsible for developing tools to reach users of all devices. My team built CAMS from the ground up to help doctors diagnose mental illness in incoming patients. CAMS makes the assessment process asynchronous and allows doctors to view patients on their own time.
                                        <p>React | Python</p>
                                    </p>
                                </div>
                            </div>

                            {/* BARTINDRE */}
                            <div className="info backwards">
                                <div className="info-text">
                                    <h2>Bartindre</h2>
                                    <p>Social network for creating, sharing, rating and saving cocktail recipes in an engaging and playful way.</p>
                                    <p>Python | Flask | Jinja2 | PostgreSQL</p>
                                </div>
                                <div>
                                    <a target="_blank" href="https://bartindre.herokuapp.com/">
                                        <div className="project-tile button-hover" style={barBack}>
                                            <div>
                                                <p className="title">BARTINDRE
                                                    <div className="description">Flask Cocktail Recipe Platform</div>
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            {/* SLOW */}
                            <div className="info">
                                <div>
                                    <a target="_blank" href="http://slowcrmv2.herokuapp.com/">
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
                            {/* POKEQUOTES */}
                            <div className="info backwards">
                              <div className="info-text">
                                <h2>PokéQuotes</h2>
                                <p>Fun, engaging, and endlessly inspirational  Pokémon quote generator to spark a user's dreams to catch em all by >103%
                                  <p>JQuery | CSS3</p>
                                </p>
                              </div>
                                <div>
                                    <a target="_blank" href="http://pokequotes.com/">
                                        <div className="project-tile button-hover" style={pokeBack}>
                                            <div>
                                                <p className="title">PokeQuotes
                                                    <div className="description">"Pika pi!" - Squirtle 🌊🐢</div>
                                                </p>
                                            </div>
                                        </div>
                                    </a>
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
                                    <div className="transparent project-outline">
                                        <a target="_blank" href="https://www.behance.net/gallery/43147761/Nopal-en-Movimiento">
                                            <div className="project-tile button-hover" style={cactusBack}></div>
                                        </a>
                                    </div>
                                    <div className="info-text">
                                        <h2>Nopal en Movimiento</h2>
                                        <p>Commissioned work that involved designing and animating several cactus characters for use in a unity project.
                                            <p>Illustrator | Photoshop</p>
                                        </p>
                                    </div>
                                </div>

                                {/* Art */}
                                <div className="info backwards">
                                    <div className="info-text">
                                        <h2>Various Illustration Assets</h2>
                                        <p>Utilizing several digital and physical mediums to create a rich and authentic asthetic.</p>
                                        <p>Adobe Illustrator | Adobe Photoshop | Acrylic | Watercolor | Pen & Ink</p>
                                    </div>
                                    <div>
                                        <a target="_blank" href="https://www.behance.net/gallery/52667453/Various-Illustration-Project-Assets">
                                            <div className="project-tile button-hover" style={artBack}></div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contents-container dev">
                          <div className="content">
                            <h2 className="what">It me</h2>
                              <i className="about-text">
                                <p>As a software engineer with a unique design background I envision a future where separate creative and implementation teams are able to move a product forward in tandem. I have a passion for creating beautiful, functional, rock solid user experiences from within a small agile team.</p>
                                <p>
                                My technical capabilities include several development languages and many design suites. But while those tools are currently in my toolbelt, my most valuable skill is my ability to relate previous knowledge to quickly understand new codebases, stacks, technologies.
                              </p>
                              </i>
                          </div>
                        </div>
                    </div>
                    {/* FOOTER */}
                    <div className="footer">
                        <div className="footing">
                            <div className="contact">

                                <div>
                                    <a target="_blank" href="https://www.google.com/maps/search/soma/@37.7808154,-122.4111944,15z/data=!3m1!4b1"
                                      className="button-hover">
                                        <i className="fa fa-map-marker" aria-hidden="true"></i> San Francisco CA</a>
                                </div>
                                <div>
                                    <a target="_blank" href="tel:+1-850-226-9048" className="button-hover">
                                      <i className="fa fa-mobile" aria-hidden="true"></i> +1 (850)226-9048</a>
                                </div>
                                <div>
                                  <a target="_blank" href="mailto:andrewmundy@gmail.com" className="button-hover">
                                    <i className="fa fa-envelope" aria-hidden="true"></i> andrewmundy@gmail.com</a>
                                </div>
                                <div>
                                    <a target="_blank" href="https://github.com/andrewmundy" className="button-hover">
                                    <i className="fa fa-github" aria-hidden="true"></i> github.com/andrewmundy</a>
                                </div>
                                <div>
                                  <a target="_blank" href="https://www.linkedin.com/in/andrew-mundy/" className="button-hover">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"></i> linkedin.com/andrewmundy</a>
                                </div>
                                <div>
                                  <a target="_blank" href="http://www.ginfoundry.com/cocktail/martini-cocktail/" className="button-hover">
                                    <i className="fa fa-glass shake" aria-hidden="true"></i> Gin Stirred Twist</a>
                                </div>
                            </div>
                            <img className="logo-lower button-hover" src={logo}/>
                        </div>
                        <div className="copy">© Andrew Mundy 1988</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default MainContent;
