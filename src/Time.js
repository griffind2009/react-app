import React, {Component} from 'react';


class Clock extends Component {
    constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.time(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  time() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
    );
  }    
}




export default Clock