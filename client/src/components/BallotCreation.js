import React, { Component } from "react";
import _ from "lodash";
import "./styles/ballot-creation.css";

class BallotCreation extends Component {
  constructor() {
    super();
    this.state = {
      objectOfNames: [],
      formValue: ""
    };

    this.getObjectOfNames = this.getObjectOfNames.bind(this);
    this.addName = this.addName.bind(this);
    this.removeName = this.removeName.bind(this);
    this.editName = this.editName.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // get names from db
    this.getObjectOfNames();
  }

  // set state to current names
  getObjectOfNames() {
    fetch("/bc-api/getObjectOfNames")
      .then(res => {
        console.log("status", res.status);
        return res.json();
      })
      .then(names => {
        this.setState((prevState, props) => {
          return { objectOfNames: names };
        });
        console.log("-->", names);
      })
      .catch(err => console.log("Error in getObjectOfNames", err));
  }

  handleChange(event) {
    this.setState({ formValue: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.formValue);
    event.preventDefault();
    console.log("POST request next with:", this.state.formValue);
    // addName() - send post

    this.setState(() => {
      return { formValue: "" };
    });
  }

  addName() {}

  removeName() {}

  editName() {}

  render() {
    // NEXT:
    // How do I get the key from the firebase record? SET it to key={____}
    // add the whole thing to GIT

    const { objectOfNames } = this.state;

    let arrayOfNamesToDisplay;

    if (objectOfNames) {
      arrayOfNamesToDisplay = _.map(objectOfNames, (record, i) => {
        return <li key={i}>{record.firstName}</li>;
      });
    }
    return (
      <div className="ballot-creation">
        <h2>Ballot Creation</h2>
        {arrayOfNamesToDisplay !== undefined ? arrayOfNamesToDisplay : null}

        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.formValue}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default BallotCreation;
