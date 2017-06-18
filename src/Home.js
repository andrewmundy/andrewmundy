import React, {Component} from 'react';
import Cams from './cams.js'

import logo from '../images/logo.svg';
import bartindre from '../images/bartindre.gif';
import slow from '../images/slow.png';
import avatar from '../images/avatar.PNG';
import cactus from '../images/cactux.gif';
import art from '../images/art.gif';
import stroke from '../images/stroke.svg';
import poke from '../images/pokequotes.gif';

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button: null,
      content: 'none',
      click: <i className="fa fa-plus" aria-hidden="true"></i>
    }
  };

  handleClick(e) {
    if (!this.state.button) {
      this.setState({
        button: 'none', content: null, click: <i className="fa fa-times" aria-hidden="true"></i>
      })
    } else {
      this.setState({
        button: null, content: 'none', click: <i className="fa fa-plus" aria-hidden="true"></i>
      })
    }
  }

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

    let barBack = {
      backgroundImage: `url(${bartindre})`
    };

    let slowBack = {
      backgroundImage: `url(${slow})`
    };

    return (
      <div>
        <div className="splash flex-center">
          <h1 className="">
            Hi I'm Andrew Mundy
          </h1>
          <img alt="avatar" className="avatar" src={avatar}/>
        </div>
        <div className="quote">
          <img alt="stroke" className="stroke" src={stroke}/>
          <p className="line">Full-Stack software engineer with an emphasis on delicious design and friendly UX/UI</p>
        </div>
        {/* ICONS */}
        {/* BODY */}
        <div className="contents-container dev">

          <div className="content">
            <h2 className="what">Dev</h2>
            {/* PROJECTS */}
            <Cams/> {/* BARTINDRE */}
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
                <p>Javascript | JQuery | Python | Flask | CSS3 Flexbox</p>
              </div>
            </div>
            {/* POKEQUOTES */}
            <div className="info backwards">
              <div className="info-text">
                <h2>PokéQuotes</h2>
                <p>Fun, engaging, and endlessly inspirational Pokémon quote generator to spark a user's dreams to catch em all by >103%
                  <p>Node.JS | JQuery | MongoDB
                  </p>
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
        </div>
        <div className="design">
          <div className="contents-container dev">
            <div className="content">
              <h2 className="what">Design</h2>
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
      </div>
    )
  }
}
export default MainContent;
