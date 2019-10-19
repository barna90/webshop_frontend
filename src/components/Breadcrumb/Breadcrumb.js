import React, { Component } from "react";

class Breadcrumb extends Component {
  state = {};

  render() {
    return (
      <div className="ps-breadcrumb">
        <div className="container-fluid">
          <ul className="breadcrumb">
            <li><a href="#">Home</a></li>
            <li><a href="shop-4-column.html">Jewellery</a></li>
            <li>Analogue Resin Strap Watch</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Breadcrumb;
