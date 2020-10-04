import React, { Component } from "react";

export default class ClassEvent extends Component {
  //Class method to handle focus Event
  handleFocus = () => {
    console.log("Yes yes focusing...");
  };
  handleFocusParams = (message) => {
    console.log(message);
  };
  render() {
    return (
      <div>
        <h2>Class Event Handle</h2>
        <input
          type="text"
          placeholder="focus event"
          onFocus={this.handleFocus}
        ></input>
        <input
          type="text"
          placeholder="focus event with parameter"
          onFocus={() => {
            this.handleFocusParams("Focus event with params working");
          }}
        ></input>
      </div>
    );
  }
}
