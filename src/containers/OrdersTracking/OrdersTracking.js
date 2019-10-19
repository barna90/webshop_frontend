import React, { Component } from "react";
import InfoSideBar from "../../components/InfoSideBar/InfoSideBar";

class OrdersTracking extends Component {
  state = {};

  render() {
    return (
      <>
        <div className="ps-hero bg--cover" data-background={require("../../assets/img/hero/shop.jpg")}>
          <div className="container">
            <h1>Returns & Exchanges</h1>
          </div>
        </div>
        <div className="ps-page ps-page--blog">
          <div className="ps-blog">
            <div className="container">
              <div className="row">
                <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 ">
                  <div className="ps-document">
                    <p>To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received</p>
                    <form className="ps-form--orders-tracking" action="do_action" method="post">
                      <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                          <div className="form-group">
                            <label> Order ID</label>
                            <input className="form-control" type="text" placeholder="Found in your order information email." />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                          <div className="form-group">
                            <label> Billing Email</label>
                            <input className="form-control" type="text" placeholder="Email you used during checkout" />
                          </div>
                        </div>
                      </div>
                      <div className="form-group submit">
                        <button className="ps-btn ps-btn--black ps-btn--outline">Track</button>
                      </div>
                    </form>
                  </div>
                </div>
                <InfoSideBar />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default OrdersTracking;
