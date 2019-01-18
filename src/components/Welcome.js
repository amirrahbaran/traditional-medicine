import React, { Component } from "react";

export default class Welcome extends Component {
  render() {
    return (
      <div>
        <h2>
          Welcome {this.props.name} {this.props.num},
          <p>
            You have
            {this.props.IQ > 100 ? " " : " not "}
            enough IQ
          </p>
        </h2>
      </div>
    );
  }
}
