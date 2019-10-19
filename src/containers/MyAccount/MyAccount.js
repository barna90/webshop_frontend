import React, { Component } from "react";

class MyAccount extends Component {
  state = {};

  render() {
    return (
      <>
        <div className="ps-hero bg--cover" data-background={require("../../assets/img/hero/shop.jpg")}>
          <div className="container">
            <h1>MY ACCOUNT</h1>
          </div>
        </div>
        <div className="ps-page ps-page--blog">
          <div className="ps-my-account">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                  <form className="ps-form--account" action="do_action" method="post">
                    <h3>Login</h3>
                    <div className="form-group">
                      <label>Username or email address <sup>*</sup></label>
                      <input className="form-control" type="text" placeholder="" />
                    </div>
                    <div className="form-group">
                      <label>Password <sup>*</sup></label>
                      <input className="form-control" type="text" placeholder="" />
                    </div>
                    <div className="form-group submit">
                      <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 ">
                          <div className="ps-checkbox">
                            <input className="form-control" type="checkbox" id="remember" name="remember"/>
                            <label htmlFor="remember">Remember me</label>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 ">
                          <button className="ps-btn ps-btn--black ps-btn--outline">Log in</button>
                        </div>
                      </div>
                    </div>
                    <div className="form-group footer"><a href="#">Lost your password?</a></div>
                  </form>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                  <form className="ps-form--account" action="do_action" method="post">
                    <h3>REGISTER</h3>
                    <div className="form-group">
                      <label>Email Address<sup>*</sup></label>
                      <input className="form-control" type="text" placeholder="" />
                    </div>
                    <div className="form-group">
                      <label>Password <sup>*</sup></label>
                      <input className="form-control" type="text" placeholder="" />
                    </div>
                    <div className="form-group submit">
                      <button className="ps-btn ps-btn--black ps-btn--outline">Register</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MyAccount;
