import React, { Component } from 'react';
import './Module.css';

let newColour = null;

class Slider extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (

        <div style={{background: "rgb("+this.props.red+","+this.props.green+","+this.props.blue+")", width: "50px", height: "50px",}}>
        </div>

    );
  }
};

Slider.defaultProps = { props: "No props defined" };

export default Slider;
