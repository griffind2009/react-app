import React, { Component } from 'react';
import Welcome from './Welcome.js';
import Clock from './Time.js';
import Form from './Form.js';
//import './App.css';

class App extends Component {
 constructor(props){
 super(props)
 this.handleClick = this.handleClick.bind(this)
 this.handleClockClick = this.handleClockClick.bind(this)
 }
 
      handleClick(e) {
        e.preventDefault()
        alert("clicked")
        console.log("clicked")
        document.getElementsByClassName('first-app')[0].style.color = "blue";
        document.getElementsByClassName('first-app')[0].innerHTML = "This is blue";
    }
     handleClockClick(e) {
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
        <button onClick={this.handleClockClick}>Click to Display Time</button>
        <p className="clock"></p>
        <Clock /> 
        <Form />
    </div>
    </div>
    );
  }
}

export default App;
