import React, { Component } from 'react';
import Header from './Header';
import Slider from './Slider';
import Swatch from './Swatch';
import './Module.css';

class Module extends Component {

  constructor(props) {
    super(props);
    this.state = {title: 'Best App',
                  red: 255,
                  green: 255,
                  blue: 255,
    };
    this.changeTitle = this.changeTitle.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }

  changeTitle() {
    const newTitle = this.state.title === 'Best App' ? 'Projects' : 'Best App';
    this.setState({title: newTitle});
  }

  changeColor(newColor) {
    this.setState({
      red: newColor,
    })
  }

  render() {
    return (
      <div class="Module">
      <Header />
        <span class="Module-title">
          <h1>Phillips Hue</h1>
        </span>
        <Slider onChange={this.changeColor} varia={"red"} />
        <Swatch red={this.state.red} green={this.state.green} blue={this.state.blue} />
      </div>
    );
  }
}

export default Module;
