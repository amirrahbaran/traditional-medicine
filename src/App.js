import React, { Component } from "react";
import Welcome from "./components/Welcome";

class FirstComponent extends Component {
  render() {
    const name = "You";

    return (
      <div>
        <h1>Salam {name}</h1>
        <Welcome name="Amir" IQ={80}/>
        <Welcome name="Steve" num={5} IQ={120}/>
      </div>
    );
  }
}

export default FirstComponent;
