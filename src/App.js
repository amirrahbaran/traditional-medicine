import React, { Component } from "react";
import "./App.css";
import Clock from "./components/Clock";
import Scientist from "./components/Scientist";
class App extends Component {
  render() {
    return (
      <div>
        <Clock />
        <Scientist name="amir" IQ={130} />
        <Scientist />
      </div>
    );
  }
}

export default App;
