import React, { Component } from "react";

class ShopCart extends Component {
  state = {};

  render() {
    return (
      <div className="ps-cart--sidebar">
        <div className="ps-cart__header">
          <h3>Mini Cart</h3><a className="ps-btn--close ps-btn--no-boder" href="#"></a>
        </div>
        <div className="ps-cart__content">
          <div className="ps-product--cart">
            <div className="ps-product__thumbnail"><a href="product-standard.html"><img src="img/product/best-5-1.jpg" alt="" /></a><span className="ps-btn--close ps-btn--no-boder"></span></div>
            <div className="ps-product__content"><a href="#">Cyan Boheme - Cyan, M</a><span>1x $45.00</span></div>
          </div>
          <div className="ps-product--cart">
            <div className="ps-product__thumbnail"><a href="product-standard.html"><img src="img/product/best-3-1.jpg" alt="" /></a><span className="ps-btn--close ps-btn--no-boder"></span></div>
            <div className="ps-product__content"><a href="#">Cyan Boheme - Cyan, M</a><span>Size: M</span><span>1x $45.00</span></div>
          </div>
        </div>
        <div className="ps-cart__footer">
          <h4>SubTotal: <span>$60.00</span></h4><a className="ps-btn" href="shopping-cart.html">View Cart</a><a className="ps-btn" href="shopping-cart.html">Checkout</a>
        </div>
      </div>
    );
  }
}

export default ShopCart;
