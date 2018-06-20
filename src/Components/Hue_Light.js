import React, { Component } from 'react';

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

        <div>
        <div onClick={this.handleChange} style={{ height: "10px", width: "100px", margin: "5px", background: this.props.color,}}></div>
        <h1>{this.props.index}</h1>
        </div>

    );
  }
};

Hue_Light.defaultProps = { props: "No props defined" };

export default Hue_Light;
