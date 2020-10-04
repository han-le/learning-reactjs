/*
 *BAI TAP CHON MAU CHO XE. Cac buoc thuc hien
 * 1. Dan layout html css
 * 2. Xac dinh cac data se thay doi va luu vao trong state
 * 3. Lay data trong state binding ra jsx
 * 4. Bat su kien cho cac button option mau sac
 * 5. Update value in state (Component se tu render lai)
 */

import React, { Component } from "react";

export default class BaiTapChonMauXe_ extends Component {
  state = {
    imgCar: "./img/car/products/red-car.jpg",
  };

  handleChangeColor = (img_car) => {
    console.log(img_car);
    //Update the value of state
    this.setState({
      imgCar: img_car,
    });
  };

  render() {
    return (
      <div>
        <section className="show-room">
          <h2 className="text-center">Bài Tập Chọn Màu Xe by Han</h2>
          <div className="container">
            <div className="chose__color d-flex justify-content-around">
              <button
                className="btn"
                onClick={() =>
                  this.handleChangeColor("./img/car/products/black-car.jpg")
                }
              >
                <img
                  src="./img/car/icons/icon-black.jpg"
                  alt="hinh"
                  style={{ width: 50 }}
                />
              </button>
              <button
                className="btn"
                onClick={() =>
                  this.handleChangeColor("./img/car/products/red-car.jpg")
                }
              >
                <img
                  src="./img/car/icons/icon-red.jpg"
                  alt="hinh"
                  style={{ width: 50 }}
                />
              </button>
              <button
                className="btn"
                onClick={() =>
                  this.handleChangeColor("./img/car/products/silver-car.jpg")
                }
              >
                <img
                  src="./img/car/icons/icon-silver.jpg"
                  alt="hinh"
                  style={{ width: 50 }}
                />
              </button>
              <button
                className="btn"
                onClick={() =>
                  this.handleChangeColor("./img/car/products/steel-car.jpg")
                }
              >
                <img
                  src="./img/car/icons/icon-steel.jpg"
                  alt="hinh"
                  style={{ width: 50 }}
                />
              </button>
            </div>
            <div className="car mt-2">
              <img
                className="img-thumbnail"
                src={this.state.imgCar}
                alt="hinh"
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
