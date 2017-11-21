import React, { Component } from 'react';
import Welcome from './Welcome.js';
import Clock from './Time.js';
//import './App.css';

class App extends Component {
 constructor(props){
 super(props)
 this.handleClick = this.handleClick.bind(this)
 this.submitClick = this.submitClick.bind(this)
 }
      handleClick(e) {
        e.preventDefault()
        alert("clicked")
        console.log("clicked")
        document.getElementsByClassName('first-app')[0].style.color = "blue";
        document.getElementsByClassName('first-app')[0].innerHTML = "This is blue";
    }
     submitClick(e) {
         e.preventDefault()
         var d = new Date()
//         document.getElementsByClassName('clock')[0].innerHTML = d.toLocaleDateString();
         document.getElementsByClassName('clock')[0].innerHTML = Date();
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
    <div className="Time">
        <button onClick={this.submitClick}>Click to Display Time</button>
        <p className="clock"></p>
        <Clock date={new Date()} /> 
    </div>
    </div>
    );
  }
}

export default App;
