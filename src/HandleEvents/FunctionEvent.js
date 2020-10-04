import React, { Component } from "react";

export default class FunctionEvent extends Component {
  render() {
    const handleClick = () => {
      alert("Click me!");
    };

    const handleClick_2 = () => {
      alert("Click me!");
    };

    const handleClickParams = (message) => {
      alert(message);
    };

    return (
      <div>
        <h2>Handle Event</h2>

        {/*Handle event in JS (does not apply in React)*/}
        <button onClick="handleClick()">Click me JS</button>

        {/*Handle event in React*/}
        <button onClick={handleClick_2}>
          Click me ReactJS NO call function
        </button>

        {/* <button onClick={handleClick_2()}>
          Click me ReactJS call function
        </button> */}

        {/* Truyen tham so vao ham */}
        {/* <button onClick={handleClickParams("I am a parameter")}>
          React Event with params
        </button> */}

        {/* Truyen tham so vao ham. De ham khong chay ap dung callback function, tao 1 arrow function to wrap up the event handle function with params */}
        <button
          onClick={() => {
            handleClickParams("I am a parameter");
          }}
        >
          React Event with params
        </button>
      </div>
    );
  }
}
