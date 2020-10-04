import React, { Component } from "react";

export default class DemoDataBinding extends Component {
  //Thuoc tinh cho class
  name = "Thuy Loan";
  album = "folklore";

  //Class method
  renderName = () => {
    return <p>Data Binding function - {this.name}</p>;
  };

  render() {
    //Bien cua phuong thuc render()
    const hinhAnh =
      "https://64.media.tumblr.com/455fc4d90d4d5f0273560414b507a341/b3961d314a0e09a5-8a/s500x750/8e49d3c6a421ca5e5681ff425428597bb90ac934.jpg";

    return (
      <div>
        <h2>Data Binding</h2>
        <p>Name: {this.name}</p>
        <p>New album: {this.album}</p>
        {this.renderName()}
        <img src={hinhAnh} />
      </div>
    );
  }
}
