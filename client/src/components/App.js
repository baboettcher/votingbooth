import React, { Component } from "react";
import "./styles/app.css";
import BallotCreation from "./BallotCreation";
//import Election from "./Election";
//import Results from "./Results";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>VOTING BOOTH</h1>
        {/* <Results /> */}
        {/* <Election /> */}
        <BallotCreation />
      </div>
    );
  }
}

export default App;
