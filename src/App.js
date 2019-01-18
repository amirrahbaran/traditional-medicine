import React, { Component } from "react";
import "./App.css";

class FirstComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
  }

  componentDidMount() {
    this.startClock();
  }

  startClock() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  pauseTick() {
    if (this.state.pause === true) {
      this.startClock();
      this.setState({ pause: false });
    } else {
      this.stopClock();
      this.setState({ pause: true });
    }
  }

  stopClock() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({
      time: new Date()
    });
  }

  render() {
    return (
      <div onClick={() => this.pauseTick()} class="box-blue">
        <h2>Time is {this.state.time.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default FirstComponent;
