import React from "react";
import "./css/App.css";
import Avatar from "./Avatar";
import StyledTest from "./styledTest";
import Module from "./Components/Module";
import Dialogue from "./Components/Dialogue";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Module />
        {/* <Counter /> */}
        <Avatar name="Fedor" />
        <StyledTest />
        <Dialogue />
      </div>
    );
  }
}

export default App;
