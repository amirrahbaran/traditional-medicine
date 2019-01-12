import React, { Component } from "react";
import Welcome from "./components/Welcome";

class FirstComponent extends Component {
  render() {
    const name = "You";

    return (
      <div>
        <h1>Salam {name}</h1>
        <Welcome name="Amir"/>
        <Welcome name="Steve" num={5}/>
      </div>
    );
  }
}

export default FirstComponent;
