import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Module.css';
import Header from './Header';
import Slider from './Components/Slider';
import Swatch from './Components/Swatch';
import Hue_Light from './Components/Hue_Light';

class Module extends Component {

  constructor(props) {
    super(props);
    this.state = {title: 'Best App',
                  deviceIndex: 0,
                    devices: [
                      {
                    name: "Bathroom",
                    id: 1,
                    col: {
                      red: 230,
                      green: 230,
                      blue: 230,
                    },
                  },
                  {
                    name: "Bedroom",
                    id: 2,
                    col: {
                      red: 255,
                      green: 255,
                      blue: 255,
                    },

                  },
                  {
                    name: "Bedroom",
                    id: 2,
                    col: {
                      red: 255,
                      green: 255,
                      blue: 255,
                    },

                  },
                  ]
    };
    this.changeTitle = this.changeTitle.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.selectIndex = this.selectIndex.bind(this);
  }

  changeTitle() {
    const newTitle = this.state.title === 'Best App' ? 'Projects' : 'Best App';
    this.setState({title: newTitle});
  }

  changeColor(newColor, color) {
    let stateClone = this.state.devices.slice();
    stateClone[this.state.deviceIndex].col[color] = newColor;
    this.setState({
      devices: stateClone,
      title: color,
    })
  }

  selectIndex(newIndex) {
    this.setState({
      deviceIndex: newIndex
    })
  }

  render() {
    return (
      <div class="Module container-fluid">
      <Header />
        <span class="Module-title">
          <h1 onClick={this.changeTitle}>{this.state.title}</h1>
        </span>
        <div class="row">
          <Hue_Light class="col" index={0} onClick={this.selectIndex} color={`rgb(${this.state.devices[0].col.red},${this.state.devices[0].col.green},${this.state.devices[0].col.blue})`}/>
          <Hue_Light class="col" index={1} onClick={this.selectIndex} color={`rgb(${this.state.devices[1].col.red},${this.state.devices[1].col.green},${this.state.devices[1].col.blue})`}/>
          <Hue_Light class="col" index={2} onClick={this.selectIndex} color={`rgb(${this.state.devices[2].col.red},${this.state.devices[2].col.green},${this.state.devices[2].col.blue})`}/>
        </div>
        <div class="row">
        <div class="col">
          <Slider onChange={this.changeColor} color='red' />
          <Slider onChange={this.changeColor} color='green' />
          <Slider onChange={this.changeColor} color='blue' />
        </div>
        <div class="col">
          <Swatch red={this.state.devices[0].col.red} green={this.state.devices[0].col.green} blue={this.state.devices[0].col.blue} />
        </div>
        <h1>{this.state.deviceIndex}</h1>
        </div>
      </div>
    );
  }
}

export default Module;
