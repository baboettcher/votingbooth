import React, { Component } from "react";
import "./App.css";
import Candidate from "./Candidate";

class Election extends Component {
  render() {
    return (
      <div>
        <div className="election">Election Time</div>
        <Candidate />
      </div>
    );
  }
}

export default Election;
