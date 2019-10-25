import React, { Component } from "react";
import { connect } from "react-redux";
import { sumBy } from "lodash";
import ShoppingCartProductRow from "./ShoppingCartProductRow/ShoppingCartProductRow";

class ShoppingCart extends Component {
  state = {};

  renderProductRow = () => {
    const { itemsInCart } = this.props;

    return itemsInCart.map(item => {
      return (
        <ShoppingCartProductRow
          id={item.id}
          name={item.name}
          price={item.price}
        />
      );
    });
  };

  sumProductsInCart = () => {
    const { itemsInCart } = this.props;
    return sumBy(itemsInCart, "price");
  };

  render() {
    return (
      <>
        <div
          className="ps-hero bg--cover"
          data-background={require("../../assets/img/hero/shop.jpg")}
        >
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
                      {this.renderProductRow()}
                      <tr className="coupon">
                        <td colSpan="2">
                          <div className="form-group--inline">
                            <label>Coupon</label>
                            <div className="form-group__content">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Coupon Code"
                              />
                              <button className="ps-btn ps-btn--outline ps-btn--black">
                                Apply coupon
                              </button>
                            </div>
                          </div>
                        </td>
                        <td colSpan="3">
                          <a
                            className="ps-btn ps-btn--outline ps-btn--black"
                            href="#"
                          >
                            {" "}
                            Update Cart
                          </a>
                        </td>
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
                          <td>
                            <strong>Subtotal</strong>
                          </td>
                          <td>{this.sumProductsInCart()} Ft</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Shiping</strong>
                          </td>
                          <td>
                            <p>Local Pickup: $15.00</p>
                            <a href="#">Calculate shipping</a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Subtotal</strong>
                          </td>
                          <td>{this.sumProductsInCart()} Ft</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="footer">
                    <a
                      className="ps-btn ps-btn--outline ps-btn--black"
                      href="checkout.html"
                    >
                      Process to checkout
                    </a>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    itemsInCart: state.addedItems
  };
};

export default connect(mapStateToProps)(ShoppingCart);
