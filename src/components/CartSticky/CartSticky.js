import React, { Component } from "react";

class CartSticky extends Component {
  state = {};

  render() {
    const { id, handleOnAddToCartClick } = this.props;

    return (
      <div id="cart-sticky">
        <div className="form-group--number">
          <button className="up">
            <i className="fa fa-plus"></i>
          </button>
          <button className="down">
            <i className="fa fa-minus"></i>
          </button>
          <input className="form-control" type="text" placeholder="1" />
        </div>
        <a
          className="ps-btn"
          href="#"
          onClick={e => handleOnAddToCartClick(e, id)}
        >
          Add to cart
        </a>
      </div>
    );
  }
}

export default CartSticky;
