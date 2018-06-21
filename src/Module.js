import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Module.css';
import Header from './Header';
import Slider from './Components/Slider';
import Swatch from './Components/Swatch';
import Hue_Light from './Components/Hue_Light';
import Hue_Light_test from './Components/Hue_Light_test';

import Angle from './Components/Angle';

class Module extends Component {

  constructor(props) {
    super(props);
    this.state = {title: 'Philips Hue',
                  deviceIndex: 0,
                    devices: [
                      {
                    name: "Bathroom",
                    id: 1,
                    col: {
                      red: 230,
                      green: 230,
                      blue: 230,
                      brightness: 100,
                    },
                  },
                  {
                    name: "Bedroom",
                    id: 2,
                    col: {
                      red: 255,
                      green: 255,
                      blue: 255,
                      brightness: 100,
                    },

                  },
                  {
                    name: "Bedroom",
                    id: 2,
                    col: {
                      red: 255,
                      green: 255,
                      blue: 255,
                      brightness: 100,
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
    let newTitle = this.state.devices[this.state.deviceIndex].name;
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
        <div class="col">
        <Hue_Light_test index={0} onClick={this.selectIndex}
            color={`rgb(${this.state.devices[0].col.red},${this.state.devices[0].col.green},${this.state.devices[0].col.blue})`}
            brightness={`rgb(${this.state.devices[0].col.brightness},${this.state.devices[0].col.brightness},${this.state.devices[0].col.brightness})`}
            name={this.state.devices[0].name}

        />
        <Hue_Light_test index={1} onClick={this.selectIndex}
            color={`rgb(${this.state.devices[1].col.red},${this.state.devices[1].col.green},${this.state.devices[1].col.blue})`}
            brightness={`rgb(${this.state.devices[1].col.brightness},${this.state.devices[1].col.brightness},${this.state.devices[1].col.brightness})`}
            name={this.state.devices[1].name}
        />
        <Hue_Light_test index={2} onClick={this.selectIndex}
            color={`rgb(${this.state.devices[2].col.red},${this.state.devices[2].col.green},${this.state.devices[2].col.blue})`}
            brightness={`rgb(${this.state.devices[2].col.brightness},${this.state.devices[2].col.brightness},${this.state.devices[2].col.brightness})`}
            name={this.state.devices[2].name}
        />
        </div>
        <div class="col">
          <div class="row">
          Colour picker here
          </div>
          <div class="row">
          <div class="col">
          <Slider onChange={this.changeColor} pos={this.state.devices[this.state.deviceIndex].col.red} color='red' />
          <Slider onChange={this.changeColor} pos={this.state.devices[this.state.deviceIndex].col.green} color='green' />
          <Slider onChange={this.changeColor} pos={this.state.devices[this.state.deviceIndex].col.blue} color='blue' />
          <Slider onChange={this.changeColor} pos={this.state.devices[this.state.deviceIndex].col.brightness} color='brightness' />
          </div>
          </div>
        </div>
        </div>
        <div class="row">
          <Hue_Light index={0} onClick={this.selectIndex}
              color={`rgb(${this.state.devices[0].col.red},${this.state.devices[0].col.green},${this.state.devices[0].col.blue})`}
              brightness={`rgb(${this.state.devices[0].col.brightness},${this.state.devices[0].col.brightness},${this.state.devices[0].col.brightness})`}
              name={this.state.devices[0].name}

          />
          <Hue_Light index={1} onClick={this.selectIndex}
              color={`rgb(${this.state.devices[1].col.red},${this.state.devices[1].col.green},${this.state.devices[1].col.blue})`}
              brightness={`rgb(${this.state.devices[1].col.brightness},${this.state.devices[1].col.brightness},${this.state.devices[1].col.brightness})`}
              name={this.state.devices[1].name}
          />
          <Hue_Light index={2} onClick={this.selectIndex}
              color={`rgb(${this.state.devices[2].col.red},${this.state.devices[2].col.green},${this.state.devices[2].col.blue})`}
              brightness={`rgb(${this.state.devices[2].col.brightness},${this.state.devices[2].col.brightness},${this.state.devices[2].col.brightness})`}
              name={this.state.devices[2].name}
          />
        </div>
        <div class="row">
        <div class="col">
          <Slider onChange={this.changeColor} pos={this.state.devices[this.state.deviceIndex].col.red} color='red' />
          <Slider onChange={this.changeColor} pos={this.state.devices[this.state.deviceIndex].col.green} color='green' />
          <Slider onChange={this.changeColor} pos={this.state.devices[this.state.deviceIndex].col.blue} color='blue' />
          <Slider onChange={this.changeColor} pos={this.state.devices[this.state.deviceIndex].col.brightness} color='brightness' />
        </div>
        </div>
        <div class="row">
          <Swatch red={this.state.devices[this.state.deviceIndex].col.red} green={this.state.devices[this.state.deviceIndex].col.green} blue={this.state.devices[this.state.deviceIndex].col.blue} />
        <h1>{this.state.deviceIndex}</h1>
        <Angle radius={70}/>

        </div>
      </div>
    );
  }
}

export default Module;
