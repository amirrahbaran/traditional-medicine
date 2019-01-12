import React, { Component } from "react";

export default class Welcome extends Component {
  render() {
    return <h2>Welcome {this.props.name} {this.props.num}</h2>;
  }
}
