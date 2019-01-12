import React, { Component } from "react";
import Salam2 from "./components/Salam2";

class FirstComponent extends Component {
  render() {
    const name = "You";

    return (
      <div>
        <h1>Salam {name}</h1>
        <Salam2 />
        <Salam2 />
        <Salam2 />
        <Salam2 />
      </div>
    );
  }
}

export default FirstComponent;
