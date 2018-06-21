import React, { Component } from 'react';
import '../css/Slider.css';

class Slider extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const newColor = e.target.value;
    const colour = this.props.color;
    this.props.onChange(newColor, colour);
  }


  render() {
    return (

        <div>
        <input onChange={this.handleChange} type="range" max="255" value={this.props.pos} style={{width: "100%",}} color={this.props.color}></input>
        </div>

    );
  }
};

Slider.defaultProps = { props: "No props defined" };

export default Slider;
