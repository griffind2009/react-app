import React, { Component } from 'react';
import Welcome from './Welcome.js';
//import './App.css';

class App extends Component {
 constructor(props){
 super(props)
 this.handleClick = this.handleClick.bind(this)
 }
      handleClick(e) {
        e.preventDefault()
        alert("clicked")
        console.log("clicked")
        document.getElementsByClassName('first-app')[0].style.color = "blue";
        document.getElementsByClassName('first-app')[0].innerHTML = "This is blue";
    }
  render() {
    return (
    <div>
      <div className="App">
          <Welcome name="Nick" />
          <h1 className="App-title">Welcome to My Page</h1>
        <p className="App-intro">
          <h3>This page was created in React!</h3>
        </p>
      </div>
      <div className="Article">
        <h5 className="first-app">My First React App</h5>
            <p>What should I put here</p>
            <button onClick={this.handleClick}>Submit</button>
      </div>
    </div>
    );
  }
}

export default App;
