import React, { Component } from "react";

class Loader extends Component {
  state = {};

  render() {
    return (
      <>
        <div className="ps-site-overlay"></div>
        <div id="loader-wrapper">
          <div className="loader-section section-left"></div>
          <div className="loader-section section-right"></div>
        </div>
      </>
    );
  }
}

export default Loader;