import React, { Component } from 'react';

//class Button extends Component {
//    render(){
//     return (
//         
//     );
//    }
//}

function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
    console.log(props.name);
}



export default Welcome;