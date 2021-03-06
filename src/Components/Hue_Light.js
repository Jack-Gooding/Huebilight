import React, { Component } from 'react';
import '../css/Hue_Light.css';
class Hue_Light extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const deviceIndex = this.props.index;
    this.props.onClick(deviceIndex);
  }


  render() {
    return (

        <div class="col">
        <div class="hue-light-container">
        <div class="hue-light-color" onClick={this.handleChange} style={{background: this.props.color,}}></div>
        <div class="hue-light-brightness" onClick={this.handleChange} style={{background: this.props.brightness}}></div>
        <p class="hue-light-name">{this.props.name}</p>
        </div>
        <h1>{this.props.index}</h1>
        </div>

    );
  }
};

Hue_Light.defaultProps = { props: "No props defined" };

export default Hue_Light;
