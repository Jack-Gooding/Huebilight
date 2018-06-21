import React from 'react';
import { CircularSlider } from 'circular-slider';
import '../css/Slider.css';
class Angle extends React.Component {
  state = {
    angle: 180
  }
  render() {
    return (
      <CircularSlider
        angle={(this.state.angle < 180) ? 180 : (this.state.angle > 360) ? 360 : this.state.angle}
        onMove={angle => this.setState({ angle })}
        arcEnd={360}
        arcStart={180}
        r={this.props.radius}
        showArc={true}
        showNeedle={false}
      />
    );
  }
}

export default Angle;
