import React, { Component } from 'react';

class Button extends Component {
    render(){
     return (
        
        document.getElementsByClassName('change-color').addEventListener('click', function() {
         document.getElementsByClassName('test')[0].style.color = "blue";
     })
     );
    }
}

export default Button;