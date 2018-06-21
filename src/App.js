import React, { Component } from 'react';
import Module from './Module';
import NavBar from './Components/NavBar';


class App extends Component {


  render() {
    return (
      <div>
      <NavBar/>
      <Module/>
      </div>
    );
  }
}

export default App;
