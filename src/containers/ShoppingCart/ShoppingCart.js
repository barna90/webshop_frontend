import React, { Component } from "react";

class ShoppingCart extends Component {
  state = {};

  render() {
    return (
      <>
        <div className="ps-hero bg--cover" data-background={require("../../assets/img/hero/shop.jpg")}>
          <div className="container">
            <h1>CART</h1>
          </div>
        </div>
        <div className="ps-page">
          <div className="ps-page__content">
            <div className="container">
              <div className="ps-shopping-cart">
                <div className="table-responsive">
                  <table className="table ps-tablet ps-table--shopping-cart">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><a href="product-standard.html"><img src={require("../../assets/img/product/best-2-1.jpg")} alt="" /></a></td>
                        <td><a href="product-standard.html">Cyan Boheme - Cyan, M</a></td>
                        <td>$45.00</td>
                        <td>
                          <div className="form-group--number">
                            <button className="up"><i className="fa fa-plus"></i></button>
                            <button className="down"><i className="fa fa-minus"></i></button>
                            <input className="form-control" type="text" placeholder="1" value="1" />
                          </div>
                        </td>
                        <td>
                          <p>$45.00</p><a className="ps-btn--close ps-btn--no-boder" href="#"></a>
                        </td>
                      </tr>
                      <tr className="coupon">
                        <td colspan="2">
                          <div className="form-group--inline">
                            <label>Coupon</label>
                            <div className="form-group__content">
                              <input className="form-control" type="text" placeholder="Coupon Code" />
                              <button className="ps-btn ps-btn--outline ps-btn--black">Apply coupon</button>
                            </div>
                          </div>
                        </td>
                        <td colspan="3"><a className="ps-btn ps-btn--outline ps-btn--black" href="#"> Update Cart</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <figure className="ps-shopping-cart__total">
                  <figcaption>CART TOTALS</figcaption>
                  <div className="table-responsive">
                    <table className="table ps-table">
                      <tbody>
                        <tr>
                          <td><strong>Subtotal</strong></td>
                          <td>$45.00</td>
                        </tr>
                        <tr>
                          <td><strong>Shiping</strong></td>
                          <td>
                            <p>Local Pickup: $15.00</p><a href="#">Calculate shipping</a>
                          </td>
                        </tr>
                        <tr>
                          <td><strong>Subtotal</strong></td>
                          <td>$45.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="footer"><a className="ps-btn ps-btn--outline ps-btn--black" href="checkout.html">Process to checkout</a></div>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ShoppingCart;
