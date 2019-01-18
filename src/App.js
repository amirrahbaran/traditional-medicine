import React, { Component } from "react";

class FirstComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
  }

  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({ 
      time: new Date() 
    });
  }

  render() {
    return (
      <div>
        <h1>Time: {this.state.time.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

export default FirstComponent;
