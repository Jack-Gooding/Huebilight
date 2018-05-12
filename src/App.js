import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { title: 'Best App' };
    this.changeTitle = this.changeTitle.bind(this);
  }

  changeTitle() {
    const newTitle = this.state.title === 'Best App' ? 'Projects' : 'Best App';
    this.setState({title: newTitle});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to {this.state.title}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.changeTitle}>Change Title</button>
      </div>
    );
  }
}

export default App;
