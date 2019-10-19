import React, { Component } from "react";

class Footer extends Component {
  state = {};

  render() {
    return (
      <>
        <footer className="ps-footer">
          <div className="ps-footer__content">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12">
                  <div className="ps-site-info">
                    <a className="ps-logo" href="#">
                      <img src="img/logo.png" alt="" />
                    </a>
                    <figure>
                      <p>
                        <i className="pe-7s-map-marker"></i> 184 Main Rd E, St
                        Albans <br> VIC 3021, Australia</br>
                      </p>
                      <p>
                        <i className="pe-7s-mail"></i>
                        <a href="mailto:contact@company.com">
                          contact@company.com
                        </a>
                      </p>
                      <p>
                        <i className="pe-7s-call"></i> +001 2233 456
                      </p>
                    </figure>
                    <ul className="ps-list--social">
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-google-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-pinterest"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12  ">
                  <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6 ">
                      <div className="widget widget_footer">
                        <h3 className="widget-title">Categories</h3>
                        <ul>
                          <li>
                            <a href="shop-4-column.html">Men</a>
                          </li>
                          <li>
                            <a href="shop-4-column.html">Women</a>
                          </li>
                          <li>
                            <a href="shop-4-column.html">Accessories</a>
                          </li>
                          <li>
                            <a href="shop-4-column.html">Shoes</a>
                          </li>
                          <li>
                            <a href="shop-4-column.html">Denim</a>
                          </li>
                          <li>
                            <a href="shop-4-column.html">Dress</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6 ">
                      <div className="widget widget_footer">
                        <h3 className="widget-title">Infomation</h3>
                        <ul>
                          <li>
                            <a href="about-us.html">About Us</a>
                          </li>
                          <li>
                            <a href="contact.html">Contact Us</a>
                          </li>
                          <li>
                            <a href="terms-and-conditions.html">
                              Terms & Conditions
                            </a>
                          </li>
                          <li>
                            <a href="returns-exchanges.html">
                              Returns & Exchanges
                            </a>
                          </li>
                          <li>
                            <a href="#">Shipping & Delivery</a>
                          </li>
                          <li>
                            <a href="#">Privacy Policy</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6 ">
                      <div className="widget widget_footer">
                        <h3 className="widget-title">Quick Links</h3>
                        <ul>
                          <li>
                            <a href="#">Store Location</a>
                          </li>
                          <li>
                            <a href="my-account.html">My Account</a>
                          </li>
                          <li>
                            <a href="orders-tracking.html">Orders Tracking</a>
                          </li>
                          <li>
                            <a href="size-guides.html">Size Guide</a>
                          </li>
                          <li>
                            <a href="faqs.html">FAQs</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
