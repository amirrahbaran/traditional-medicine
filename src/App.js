import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    let greeting = (name) => <h1>Hello {name}</h1>;
    return <div className='red'>
      {greeting("Amir")}
    </div>;
  }
}

export default App;
