import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Scientist extends Component {
  render() {
    return (
      <div>
        <h3>
          {this.props.name}
          {this.props.IQ > 120 ? " has " : " does not have "}
          enough IQ
        </h3>
      </div>
    );
  }
}

Scientist.propTypes = {
  name: PropTypes.string.isRequired,
  IQ: PropTypes.number.isRequired
}

Scientist.defaultProps = {
  name: "he",
  IQ: 100
}
