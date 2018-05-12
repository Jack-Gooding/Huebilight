import React, { Component } from 'react';
import './Module.css';

let newColour = null;

class Slider extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const newColor = e.target.value;
    this.props.onChange(newColor);
  }


  render() {
    return (

        <div>
        <input onChange={this.handleChange} type="range" max="255"></input>
        <h1>{Slider.props}</h1>
        </div>

    );
  }
};

Slider.defaultProps = { props: "No props defined" };

export default Slider;
