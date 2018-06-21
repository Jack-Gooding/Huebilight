import React, { Component } from 'react';
import './Module.css';

let newColour = null;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { style: {
                          background: '#faf',
                          color: 'red',
                          padding: '5px'
                        }
                  };
    this.changeColour = this.changeColour.bind(this);
  }


  changeColour() {
    this.setState({style: {background: 'blue',
                            color: 'green',
                            padding: '5px'}});
  }

  render() {

    return (
        <div id="header" style={this.props.style}>
          <h1>Philips Hue</h1>
        </div>
    );
  }
};

Header.defaultProps = { props: "No props defined" };

export default Header;
