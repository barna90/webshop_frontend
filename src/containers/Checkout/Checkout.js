import React, { Component } from "react";
import { connect } from "react-redux";
import CheckoutProductRow from "./CheckoutProductRow/CheckoutProductRow";

class Checkout extends Component {
  state = {};

  renderProductRow = () => {
    const { itemsInCart } = this.props;

    return itemsInCart.map(item => {
      return (
        <CheckoutProductRow 
          name={item.name} 
          price={item.price} 
          selectedColor={item.selectedColor} 
          selectedSize={item.selectedSize} 
          quantity={item.quantity}
          coverImageFileName={item.coverImageFileName}
        />
      );
    });
  };

  render() {
    return (
      <>
        <div
          className="ps-hero bg--cover"
          data-background={require("../../assets/img/hero/shop.jpg")}
        >
          <div className="container">
            <h1>Checkout</h1>
          </div>
        </div>
        <div className="ps-page">
          <div className="ps-page__content">
            <div className="container">
              <div className="ps-checkout">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                    <form
                      className="ps-form--checkout"
                      action="do_action"
                      method="post"
                    >
                      <h3 className="ps-checkout__heading">BILLING DETAILS</h3>
                      <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                          <div className="form-group">
                            <label>
                              Fist Name <sup>*</sup>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              placeholder=""
                            />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                          <div className="form-group">
                            <label>
                              Last Name <sup>*</sup>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Company name (optional)</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder=""
                        />
                      </div>
                      <div className="form-group">
                        <label>Country</label>
                        <select className="form-control">
                          <option value="1">USA</option>
                          <option value="1">Singapore</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>
                          Street Address <sup>*</sup>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder=""
                        />
                      </div>
                      <div className="form-group">
                        <label>
                          Town / City <sup>*</sup>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder=""
                        />
                      </div>
                      <div className="form-group">
                        <label>
                          Phone <sup>*</sup>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder=""
                        />
                      </div>
                      <div className="form-group">
                        <label>
                          Email address <sup>*</sup>
                        </label>
                        <input
                          className="form-control"
                          type="email"
                          placeholder=""
                        />
                      </div>
                      <div className="form-group">
                        <div className="ps-checkbox">
                          <input
                            className="form-control"
                            type="checkbox"
                            id="create"
                            name="create"
                          />
                          <label htmlFor="create">Create an account?</label>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Order notes (optional)</label>
                        <textarea
                          className="form-control"
                          rows="5"
                          placeholder=""
                        ></textarea>
                      </div>
                    </form>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                    <h3 className="ps-checkout__heading">YOUR ORDER</h3>
                    <div className="table-responsive">
                      <table className="table ps-table ps-table--checkout">
                        <tbody>
                          <tr>
                            <td>
                              <strong>Product</strong>
                            </td>
                            <td>
                              <strong>Total</strong>
                            </td>
                          </tr>
                          {this.renderProductRow()}
                          <tr>
                            <td>
                              <strong>Subtotal</strong>
                            </td>
                            <td>$45.00</td>
                          </tr>
                          <tr>
                            <td>
                              <strong>Shipping</strong>
                            </td>
                            <td>Local Pickup: $15.00</td>
                          </tr>
                          <tr className="total">
                            <td>
                              <strong>Total</strong>
                            </td>
                            <td>$60.00</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="ps-checkout__payment-menthod">
                      <div className="ps-radio">
                        <input
                          className="form-control"
                          type="radio"
                          id="payment-method-1"
                          name="payment-menthod"
                        />
                        <label htmlFor="payment-method-1">Check payments</label>
                      </div>
                      <div className="ps-radio">
                        <input
                          className="form-control"
                          type="radio"
                          id="payment-method-2"
                          name="payment-menthod"
                        />
                        <label htmlFor="payment-method-2">
                          Cash on delivery
                        </label>
                      </div>
                      <div className="ps-radio">
                        <input
                          className="form-control"
                          type="radio"
                          id="payment-method-3"
                          name="payment-menthod"
                        />
                        <label htmlFor="payment-method-3">
                          Visa{" "}
                          <img
                            src={require("../../assets/img/visa.jpg")}
                            alt=""
                          />
                        </label>
                      </div>
                      <button className="ps-btn ps-btn--outline ps-btn--black">
                        Place order
                      </button>
                    </div>
                  </div>
                </div>
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
    itemsInCart: state.cart.addedItems
  };
};

export default connect(mapStateToProps)(Checkout);
