import React, { Component } from "react";

class Contact extends Component {
  state = {};

  render() {
    return (
      <>
        <div className="ps-hero bg--cover" data-background="img/hero/shop.jpg">
          <div className="container">
            <h1>CONTACT</h1>
          </div>
        </div>
        <div className="ps-page">
        <div className="ps-contact">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                <form className="ps-form--contact" action="do_action" method="post">
                  <h3>Drop us a line</h3>
                  <div className="form-group">
                    <label>Your name (required)</label>
                    <input className="form-control" type="text" placeholder="" />
                  </div>
                  <div className="form-group">
                    <label>Your Email (required)</label>
                    <input className="form-control" type="text" placeholder="" />
                  </div>
                  <div className="form-group">
                    <label>Subject</label>
                    <input className="form-control" type="text" placeholder="" />
                  </div>
                  <div className="form-group">
                    <label>Your Message</label>
                    <textarea className="form-control" rows="6"></textarea>
                  </div>
                  <div className="form-group submit">
                    <button className="ps-btn ps-btn--fullwidth ps-btn--black ps-btn--outline">Send</button>
                  </div>
                </form>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                <h3>Contact Information</h3>
                <p>We love to hear from you on our customer service, merchandise, website or any topics you want to share with us. Your comments and suggestions will be appreciated. Please complete the form below.</p>
                <p><i className="fa fa-home"></i> 184 Main Rd E, St Albans Victoria 3021, Australia</p>
                <p><i className="fa fa-phone"></i> 1800-123-222 / 1900-1570-230</p>
                <p><i className="fa fa-envelope"></i> 1800-123-222 / 1900-1570-230</p>
                <p><i className="fa fa-clock-o"></i> Everyday 9:00-17:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default Contact;
