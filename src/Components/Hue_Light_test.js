import React, { Component } from 'react';
import '../css/Hue_Light_test.css';
class Hue_Light_test extends Component {
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

        <div class="hue-light-container">
        <p class="hue-light-name">{this.props.name}</p>
        <div class="hue-light-color" onClick={this.handleChange} style={{background: this.props.color,}}></div>
        <div class="hue-light-brightness" onClick={this.handleChange} style={{background: this.props.brightness}}></div>
        </div>

    );
  }
};

Hue_Light_test.defaultProps = { props: "No props defined" };

export default Hue_Light_test;
