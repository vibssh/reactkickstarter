import React, { Component } from "react";
import "./App.scss";

const style = {
  textAlign: "center"
};

const nomargin = {
  margin: "0"
};
const smalltext = {
  fontSize: "14px"
};

const emphasis = {
  fontStyle: "italic",
  fontSize: "12px",
  margin: "0"
};

class App extends Component {
  render() {
    return (
      <div className="container" style={style}>
        <h3 style={nomargin}>React Boilerplate - based on create-react-app</h3>
        <em style={emphasis}>powered by lint hooks</em>
        <p style={smalltext}>
          {" "}
          Remove all inline styles and text and create your own app by Editing
          ./src/App.js file{" "}
        </p>
      </div>
    );
  }
}

export default App;
