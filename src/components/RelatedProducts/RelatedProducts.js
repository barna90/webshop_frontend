import React, { Component } from "react";

class RelatedProducts extends Component {
  state = {};

  render() {
    return (
      <div className="ps-section ps-related-products">
        <div className="container">
          <div className="ps-section__header">
            <h3>RELATED PRODUCTS</h3>
          </div>
          <div className="ps-section__content">
            <div className="ps-carousel--nav owl-slider" data-owl-auto="true" data-owl-loop="true" data-owl-speed="5000" data-owl-gap="30" data-owl-nav="true" data-owl-dots="true" data-owl-item="4" data-owl-item-xs="1" data-owl-item-sm="2" data-owl-item-md="3" data-owl-item-lg="4" data-owl-duration="1000" data-owl-mousedrag="on">
              <div className="ps-product">
                <div className="ps-product__thumbnail"><a className="ps-product__overlay" href="product-standard.html"></a><a className="ps-product__img" href="product-standard.html"><img src={require("../../assets/img/product/trend-1-1.jpg")} alt=""/></a><a className="ps-product__img-alt" href="product-standard.html"><img src={require("../../assets/img/product/trend-1-2.jpg")} alt=""/></a><a className="ps-product__favorite" href="#"><i className="fa fa-heart-o"></i></a>
                  <ul className="ps-product__actions">
                    <li><a href="product-standard.html">Quick Shop</a></li>
                    <li><a href="product-standard.html">Add to cart</a></li>
                  </ul>
                  <p className="ps-product__size">S, M, L</p>
                </div>
                <div className="ps-product__content">
                  <div className="ps-product__meta"><a href="shop-2-column.html"></a></div><a className="ps-product__title" href="product-standard.html">Cyan Boheme</a>
                  <p className="ps-product__price"> $85.00</p>
                  <div className="ps-product__color">
                    <div className="ps-radio ps-radio--color ps-radio--inline color-1">
                      <input className="form-control" type="radio" id="color-undefined18" name="color-undefined"/>
                      <label htmlFor="color-undefined18"></label>
                    </div>
                    <div className="ps-radio ps-radio--color ps-radio--inline color-2">
                      <input className="form-control" type="radio" id="color-undefined26" name="color-undefined"/>
                      <label htmlFor="color-undefined26"></label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ps-product">
                <div className="ps-product__thumbnail"><a className="ps-product__overlay" href="product-standard.html"></a><a className="ps-product__img" href="product-standard.html"><img src={require("../../assets/img/product/best-4-1.jpg")} alt=""/></a><a className="ps-product__img-alt" href="product-standard.html"><img src={require("../../assets/img/product/trend-4-2.jpg")} alt=""/></a><a className="ps-product__favorite" href="#"><i className="fa fa-heart-o"></i></a>
                  <ul className="ps-product__actions">
                    <li><a href="product-standard.html">Quick Shop</a></li>
                    <li><a href="product-standard.html">Add to cart</a></li>
                  </ul>
                  <p className="ps-product__size">S, M, L</p>
                </div>
                <div className="ps-product__content">
                  <div className="ps-product__meta"><a href="shop-2-column.html"></a></div><a className="ps-product__title" href="product-standard.html">Calvin Klein Logo Sweatpants</a>
                  <p className="ps-product__price"> $36.00</p>
                </div>
              </div>
              <div className="ps-product">
                <div className="ps-product__thumbnail"><a className="ps-product__overlay" href="product-standard.html"></a><a className="ps-product__img" href="product-standard.html"><img src={require("../../assets/img/product/best-6-1.jpg")} alt=""/></a><a className="ps-product__img-alt" href="product-standard.html"><img src={require("../../assets/img/product/best-6-2.jpg")} alt=""/></a><a className="ps-product__favorite" href="#"><i className="fa fa-heart-o"></i></a>
                  <ul className="ps-product__actions">
                    <li><a href="product-standard.html">Quick Shop</a></li>
                    <li><a href="product-standard.html">Add to cart</a></li>
                  </ul>
                  <p className="ps-product__size">S, M, L</p>
                </div>
                <div className="ps-product__content">
                  <div className="ps-product__meta"><a href="shop-2-column.html"></a></div><a className="ps-product__title" href="product-standard.html">Cuffed Beanie</a>
                  <p className="ps-product__price"> $45.00 – $53.00</p>
                  <div className="ps-product__color">
                    <div className="ps-radio ps-radio--color ps-radio--inline color-1">
                      <input className="form-control" type="radio" id="color-undefined93" name="color-undefined"/>
                      <label htmlFor="color-undefined93"></label>
                    </div>
                    <div className="ps-radio ps-radio--color ps-radio--inline color-2">
                      <input className="form-control" type="radio" id="color-undefined53" name="color-undefined"/>
                      <label htmlFor="color-undefined53"></label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ps-product">
                <div className="ps-product__thumbnail"><a className="ps-product__overlay" href="product-standard.html"></a><span className="ps-product__badge disabled"><i>Sold Out</i></span><a className="ps-product__img" href="product-standard.html"><img src={require("../../assets/img/product/trend-2-1.jpg")} alt=""/></a><a className="ps-product__img-alt" href="product-standard.html"><img src={require("../../assets/img/product/trend-2-2.jpg")} alt=""/></a><a className="ps-product__favorite" href="#"><i className="fa fa-heart-o"></i></a>
                  <ul className="ps-product__actions">
                    <li><a href="product-standard.html">Quick Shop</a></li>
                    <li><a href="product-standard.html">Add to cart</a></li>
                  </ul>
                  <p className="ps-product__size">S, M, L</p>
                </div>
                <div className="ps-product__content">
                  <div className="ps-product__meta"><a href="shop-2-column.html"></a></div><a className="ps-product__title" href="product-standard.html">Short Sleeved Hoodie With Step Hem</a>
                  <p className="ps-product__price"> $35.00</p>
                </div>
              </div>
              <div className="ps-product">
                <div className="ps-product__thumbnail"><a className="ps-product__overlay" href="product-standard.html"></a><span className="ps-product__badge"><i> - 14.3%</i></span><a className="ps-product__img" href="product-standard.html"><img src={require("../../assets/img/product/trend-3-1.jpg")} alt=""/></a><a className="ps-product__img-alt" href="product-standard.html"><img src={require("../../assets/img/product/best-3-2.jpg")} alt=""/></a><a className="ps-product__favorite" href="#"><i className="fa fa-heart-o"></i></a>
                  <ul className="ps-product__actions">
                    <li><a href="product-standard.html">Quick Shop</a></li>
                    <li><a href="product-standard.html">Add to cart</a></li>
                  </ul>
                  <p className="ps-product__size">S, M, L</p>
                </div>
                <div className="ps-product__content">
                  <div className="ps-product__meta"><a href="shop-2-column.html"></a></div><a className="ps-product__title" href="product-standard.html">Woleen Tee</a>
                  <p className="ps-product__price sale"> <del>$35.00</del>$30.00</p>
                  <div className="ps-product__color">
                    <div className="ps-radio ps-radio--color ps-radio--inline color-1">
                      <input className="form-control" type="radio" id="color-undefined33" name="color-undefined"/>
                      <label htmlFor="color-undefined33"></label>
                    </div>
                    <div className="ps-radio ps-radio--color ps-radio--inline color-2">
                      <input className="form-control" type="radio" id="color-undefined20" name="color-undefined"/>
                      <label htmlFor="color-undefined20"></label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ps-product">
                <div className="ps-product__thumbnail"><a className="ps-product__overlay" href="product-standard.html"></a><a className="ps-product__img" href="product-standard.html"><img src={require("../../assets/img/product/trend-4-1.jpg")} alt=""/></a><a className="ps-product__img-alt" href="product-standard.html"><img src={require("../../assets/img/product/trend-4-2.jpg")} alt=""/></a><a className="ps-product__favorite" href="#"><i className="fa fa-heart-o"></i></a>
                  <ul className="ps-product__actions">
                    <li><a href="product-standard.html">Quick Shop</a></li>
                    <li><a href="product-standard.html">Add to cart</a></li>
                  </ul>
                  <p className="ps-product__size">S, M, L</p>
                </div>
                <div className="ps-product__content">
                  <div className="ps-product__meta"><a href="shop-2-column.html"></a></div><a className="ps-product__title" href="product-standard.html">Grey Beanie</a>
                  <p className="ps-product__price"> $15.00</p>
                  <div className="ps-product__color">
                    <div className="ps-radio ps-radio--color ps-radio--inline color-1">
                      <input className="form-control" type="radio" id="color-undefined8" name="color-undefined"/>
                      <label htmlFor="color-undefined8"></label>
                    </div>
                    <div className="ps-radio ps-radio--color ps-radio--inline color-2">
                      <input className="form-control" type="radio" id="color-undefined85" name="color-undefined"/>
                      <label htmlFor="color-undefined85"></label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ps-product">
                <div className="ps-product__thumbnail"><a className="ps-product__overlay" href="product-standard.html"></a><span className="ps-product__badge"><i> - 14.3%</i></span><a className="ps-product__img" href="product-standard.html"><img src={require("../../assets/img/product/trend-5-1.jpg")} alt=""/></a><a className="ps-product__img-alt" href="product-standard.html"><img src={require("../../assets/img/product/trend-5-2.jpg")} alt=""/></a><a className="ps-product__favorite" href="#"><i className="fa fa-heart-o"></i></a>
                  <ul className="ps-product__actions">
                    <li><a href="product-standard.html">Quick Shop</a></li>
                    <li><a href="product-standard.html">Add to cart</a></li>
                  </ul>
                  <p className="ps-product__size">S, M, L</p>
                </div>
                <div className="ps-product__content">
                  <div className="ps-product__meta"><a href="shop-2-column.html"></a></div><a className="ps-product__title" href="product-standard.html">Pink Leather Watch</a>
                  <p className="ps-product__price sale"> <del>$35.00</del>$30.00</p>
                </div>
              </div>
              <div className="ps-product">
                <div className="ps-product__thumbnail"><a className="ps-product__overlay" href="product-standard.html"></a><a className="ps-product__img" href="product-standard.html"><img src={require("../../assets/img/product/best-3-1.jpg")} alt=""/></a><a className="ps-product__img-alt" href="product-standard.html"><img src={require("../../assets/img/product/best-3-2.jpg")} alt=""/></a><a className="ps-product__favorite" href="#"><i className="fa fa-heart-o"></i></a>
                  <ul className="ps-product__actions">
                    <li><a href="product-standard.html">Quick Shop</a></li>
                    <li><a href="product-standard.html">Add to cart</a></li>
                  </ul>
                  <p className="ps-product__size">S, M, L</p>
                </div>
                <div className="ps-product__content">
                  <div className="ps-product__meta"><a href="shop-2-column.html"></a></div><a className="ps-product__title" href="product-standard.html">Brown Sneaker Shoest</a>
                  <p className="ps-product__price"> $45.00 – $53.00</p>
                  <div className="ps-product__color">
                    <div className="ps-radio ps-radio--color ps-radio--inline color-1">
                      <input className="form-control" type="radio" id="color-undefined61" name="color-undefined"/>
                      <label htmlFor="color-undefined61"></label>
                    </div>
                    <div className="ps-radio ps-radio--color ps-radio--inline color-2">
                      <input className="form-control" type="radio" id="color-undefined3" name="color-undefined"/>
                      <label htmlFor="color-undefined3"></label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RelatedProducts;
