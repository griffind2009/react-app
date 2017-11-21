import React, {Component} from 'react';



function Clock(props) {
  return (
      <p>It is {props.date.toLocaleTimeString()}.</p>
  );
}

//function tick(){
//    setInterval(function(){ Clock() }, 1000);
//}



export default Clock