import React, {Component} from 'react';
import './App.css';
import data from './info.json';

class Cams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button: null,
      content: 'none',
      click: <i className="fa fa-plus" aria-hidden="true"></i>,
      projects:[]
    }
  };

  handleClick(e){
    if(!this.state.button){
      this.setState({
        button: 'none',
        content: null,
        click: <i className="fa fa-times" aria-hidden="true"></i>
      })
    }else{
      this.setState({
        button: null,
        content: 'none',
        click:<i className="fa fa-plus" aria-hidden="true"></i>
      })
    }
  };

  componentDidMount(){
    var projects = [];
    data.forEach(obj => projects.push(obj));
    this.setState({ projects: projects });
  };

  projectStep(){
    var props = this.state;
    return this.state.projects.map(function(item, props){
      return <div>
        <div
          className="card"
          style={{
            'display': props.button,
            'backgroundImage': `url(${item.img.first})`
            }}>
          <div>
            <a target="_blank">
              <div
                className="project-tile button-hover"
                // onClick={this.handleClick.bind(this)}
                style={{"backgroundImage": `url(${item.thumbnail})`}}>
                  <div>
                    <p className="title">{item.title}
                      <div className="description">{item.blurb}</div>
                    </p>
                  </div>
              </div>
            </a>
          </div>
          <div className="info-text">
            <h2>{item.title}</h2>
            <p>{item.description}
              <p>{Object.values(item.technologies)}</p>
            </p>
          </div>
          <div
            style={{'display':props.content}}
            >
          </div>
        </div>
        <div
          className="extra"
            style={{'display':props.content}}
          >
          <div className="newtile" style={{"backgroundImage": `url(${item.thumbnail})`}}>
            asda
          </div>
        </div>
        <div
          className="expand button-hover"
          // onClick={this.handleClick.bind(this)}
          >
          {props.click}
        </div>
    </div>
  });
  }


  render() {
    return (
      <div className="info">
        <p>{this.projectStep()}</p>
      </div>
    );
  }
}

export default Cams;
