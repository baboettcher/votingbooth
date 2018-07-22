import React, { Component } from "react";
import "./App.css";

class Candidate extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      name: "Bubba"
    };

    this.increaseCount = this.increaseCount.bind(this);
    this.decreaseCount = this.decreaseCount.bind(this);
  }

  increaseCount(e) {
    fetch("/api/score")
      .then(res => {
        console.log("status", res.status);
        return res.json();
      })
      .then(customers => console.log(customers))
      .catch(err => console.log("Error Enorme", err));

    this.setState((prevState, props) => {
      return { count: prevState.count + 1 };
    });
  }

  decreaseCount(e) {
    this.setState((prevState, props) => {
      return { count: prevState.count - 1 };
    });
  }

  componentDidMount() {
    // get votes and
  }

  componentDidUpdate() {
    // listen for changes
  }
  render() {
    console.log("COUNT", this.state.count);
    return (
      <div className="App">
        <h2>
          <div> Name: {this.state.name ? this.state.name : null}</div>
          <div className="number">{this.state.count}</div>

          <button className="clicker" onClick={this.increaseCount}>
            +
          </button>
          <button className="clicker" onClick={this.decreaseCount}>
            -
          </button>
        </h2>
      </div>
    );
  }
}

export default Candidate;
