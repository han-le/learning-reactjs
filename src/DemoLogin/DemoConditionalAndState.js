import React, { Component } from "react";

export default class DemoConditionalAndState extends Component {
  //------Object state de repeat render(). state la mot thuoc tinh cua Component, giup chung ta update value cua no ma ham render() khong can chay lai. Khi update state thi Compnent se render lai de update UI
  state = {
    isLogin: false,
  };

  //------Class method
  logInEvent = () => {
    this.state.isLogin = true;
    //setState() la method do Component cung cap. Set lai gia tri cho isLogin
    this.setState({
      isLogin: true, //vi state la object nen update value phai open {}
    });
  };

  renderLogin = () => {
    //---Cach 1: Dung if else
    if (this.state.isLogin) {
      return <p>You are logged in. Username: </p>;
    } else {
      return (
        <button className="btn btn-warning" onClick={this.logInEvent}>
          Log in
        </button>
      );
    }

    //---Cach 2: Dung toan tu 3 ngoi --< condition? codes_if_true : codes_if_false >--

    // return this.isLogin ? (
    //   <p>You are logged in. Username: </p>
    // ) : (
    //   <button className="btn btn-warning">Log in</button>
    // );
  };

  render() {
    return (
      <div>
        <h2>Conditional And State</h2>
        <div>{this.renderLogin()}</div>
      </div>
    );
  }
}
