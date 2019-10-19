import React, { Component } from "react";

class Home extends Component {
  state = {};

  render() {
    return (
      <>
        <div className="ps-page">
          <ul className="ps-list--categories">
            <li>
              <a href="shop-4-column.html">Accessories</a>
            </li>
            <li>
              <a href="shop-4-column.html">Bottom</a>
            </li>
            <li>
              <a href="shop-4-column.html">Demin</a>
            </li>
            <li>
              <a href="shop-4-column.html">Dress</a>
            </li>
            <li>
              <a href="shop-4-column.html">Jackets</a>
            </li>
            <li>
              <a href="shop-4-column.html">Jewellery</a>
            </li>
            <li>
              <a href="shop-4-column.html">Men</a>
            </li>
            <li>
              <a href="shop-4-column.html">Shoes</a>
            </li>
            <li>
              <a href="shop-4-column.html">Swim</a>
            </li>
            <li>
              <a href="shop-4-column.html">T-Shirt</a>
            </li>
            <li>
              <a href="shop-4-column.html">Tops</a>
            </li>
            <li>
              <a href="shop-4-column.html">Uncategories</a>
            </li>
            <li>
              <a href="shop-4-column.html">Women</a>
            </li>
          </ul>
          <div
            className="ps-hero bg--cover"
            data-background="img/hero/shop.jpg"
          >
            <div className="container">
              <h1>Shop All Products</h1>
              <p>Online fashion, furniture, handmade... store</p>
            </div>
          </div>
          <div className="ps-shopping ps-shop--masonry">
            <div className="container">
              <div className="ps-filter--shopping">
                <a className="ps-filter__trigger" href="#" id="filter-sidebar">
                  <i className="fa fa-sliders"></i>
                </a>
                <div className="ps-filter__column-switch">
                  <a className="two" href="shop-2-masonry.html"></a>
                  <a className="three" href="shop-3-masonry.html"></a>
                  <a className="active four" href="shop-masonry.html"></a>
                  <a className="six" href="shop-6-masonry.html"></a>
                </div>
                <div className="form-group--select">
                  <i className="fa fa-angle-down"></i>
                  <div className="form-group__content">
                    <select className="form-control">
                      <option value="1">Sort by Lastest</option>
                      <option value="1">Sort by Price</option>
                      <option value="1">Sort by Average Rating</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="ps-shopping__content">
                <div className="masonry-wrapper" data-col-lg="4" data-col-md="3" data-col-sm="2" data-col-xs="1" data-gap="30" data-radio="100%">
                  <div className="ps-masonry">
                    <div className="grid-sizer"></div>
                    <div className="grid-item">
                      <div className="grid-item__content-wrapper">
                        <div className="ps-product">
                          <div className="ps-product__thumbnail"><a className="ps-product__overlay" href="product-standard.html"></a><a className="ps-product__img" href="product-standard.html"><img src="img/product/best-1-1.jpg" alt=""/></a><a className="ps-product__img-alt" href="product-standard.html"><img src="img/product/best-1-2.jpg" alt=""/></a><a className="ps-product__favorite" href="#"><i className="fa fa-heart-o"></i></a>
                            <ul className="ps-product__actions">
                              <li><a href="product-standard.html">Quick Shop</a></li>
                              <li><a href="product-standard.html">Add to cart</a></li>
                            </ul>
                            <p className="ps-product__size">S, M, L</p>
                          </div>
                          <div className="ps-product__content">
                            <div className="ps-product__meta"><a href="shop-2-column.html"></a></div><a className="ps-product__title" href="product-standard.html">Analogue Resin Strap Watch</a>
                            <p className="ps-product__price"> $85.00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid-item">
                      <div className="grid-item__content-wrapper">
                        <div className="ps-product">
                          <div className="ps-product__thumbnail"><a className="ps-product__overlay" href="product-standard.html"></a><a className="ps-product__img" href="product-standard.html"><img src="img/product/best-2-1.jpg" alt=""/></a><a className="ps-product__img-alt" href="product-standard.html"><img src="img/product/best-2-2.jpg" alt=""/></a><a className="ps-product__favorite" href="#"><i className="fa fa-heart-o"></i></a>
                            <ul className="ps-product__actions">
                              <li><a href="product-standard.html">Quick Shop</a></li>
                              <li><a href="product-standard.html">Add to cart</a></li>
                            </ul>
                            <p className="ps-product__size">S, M, L</p>
                          </div>
                          <div className="ps-product__content">
                            <div className="ps-product__meta"><a href="shop-2-column.html"></a></div><a className="ps-product__title" href="product-standard.html">ASOS Ridley High Waist</a>
                            <p className="ps-product__price"> $36.00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid-item">
                      <div className="grid-item__content-wrapper">
                        <div className="ps-product">
                          <div className="ps-product__thumbnail"><a className="ps-product__overlay" href="product-standard.html"></a><a className="ps-product__img" href="product-standard.html"><img src="img/product/best-3-1.jpg" alt=""/></a><a className="ps-product__img-alt" href="product-standard.html"><img src="img/product/best-3-2.jpg" alt=""/></a><a className="ps-product__favorite" href="#"><i className="fa fa-heart-o"></i></a>
                            <ul className="ps-product__actions">
                              <li><a href="product-standard.html">Quick Shop</a></li>
                              <li><a href="product-standard.html">Add to cart</a></li>
                            </ul>
                            <p className="ps-product__size">S, M, L</p>
                          </div>
                          <div className="ps-product__content">
                            <div className="ps-product__meta"><a href="shop-2-column.html"></a></div><a className="ps-product__title" href="product-standard.html">Brown Sneaker Shoes</a>
                            <p className="ps-product__price"> $45.00 – $53.00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid-item">
                      <div className="grid-item__content-wrapper">
                        <div className="ps-product">
                          <div className="ps-product__thumbnail"><a className="ps-product__overlay" href="product-standard.html"></a><a className="ps-product__img" href="product-standard.html"><img src="img/product/best-4-1.jpg" alt=""/></a><a className="ps-product__img-alt" href="product-standard.html"><img src="img/product/best-4-2.jpg" alt=""/></a><a className="ps-product__favorite" href="#"><i className="fa fa-heart-o"></i></a>
                            <ul className="ps-product__actions">
                              <li><a href="product-standard.html">Quick Shop</a></li>
                              <li><a href="product-standard.html">Add to cart</a></li>
                            </ul>
                            <p className="ps-product__size">S, M, L</p>
                          </div>
                          <div className="ps-product__content">
                            <div className="ps-product__meta"><a href="shop-2-column.html"></a></div><a className="ps-product__title" href="product-standard.html">Calvin Klein Logo Sweatpants</a>
                            <p className="ps-product__price"> $35.00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid-item">
                      <div className="grid-item__content-wrapper">
                        <div className="ps-product">
                          <div className="ps-product__thumbnail"><a className="ps-product__overlay" href="product-standard.html"></a><span className="ps-product__badge"><i> - 14.3%</i></span><a className="ps-product__img" href="product-standard.html"><img src="img/product/best-5-1.jpg" alt=""/></a><a className="ps-product__img-alt" href="product-standard.html"><img src="img/product/best-5-2.jpg" alt=""/></a><a className="ps-product__favorite" href="#"><i className="fa fa-heart-o"></i></a>
                            <ul className="ps-product__actions">
                              <li><a href="product-standard.html">Quick Shop</a></li>
                              <li><a href="product-standard.html">Add to cart</a></li>
                            </ul>
                            <p className="ps-product__size">S, M, L</p>
                          </div>
                          <div className="ps-product__content">
                            <div className="ps-product__meta"><a href="shop-2-column.html"></a></div><a className="ps-product__title" href="product-standard.html">Cluse La Bohème Rose Gold</a>
                            <p className="ps-product__price sale"> <del>$35.00</del>$30.00</p>
                            <div className="ps-product__color">
                              <div className="ps-radio ps-radio--color ps-radio--inline color-1">
                                <input className="form-control" type="radio" id="color-445" name="color-4"/>
                                <label for="color-445"></label>
                              </div>
                              <div className="ps-radio ps-radio--color ps-radio--inline color-2">
                                <input className="form-control" type="radio" id="color-432" name="color-4"/>
                                <label for="color-432"></label>
                              </div>
                              <div className="ps-radio ps-radio--color ps-radio--inline color-3">
                                <input className="form-control" type="radio" id="color-488" name="color-4"/>
                                <label for="color-488"></label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid-item">
                      <div className="grid-item__content-wrapper">
                        <div className="ps-product">
                          <div className="ps-product__thumbnail"><a className="ps-product__overlay" href="product-standard.html"></a><span className="ps-product__badge disabled"><i>Sold Out</i></span><a className="ps-product__img" href="product-standard.html"><img src="img/product/best-6-1.jpg" alt=""/></a><a className="ps-product__img-alt" href="product-standard.html"><img src="img/product/best-6-2.jpg" alt=""/></a><a className="ps-product__favorite" href="#"><i className="fa fa-heart-o"></i></a>
                            <ul className="ps-product__actions">
                              <li><a href="product-standard.html">Quick Shop</a></li>
                              <li><a href="product-standard.html">Add to cart</a></li>
                            </ul>
                            <p className="ps-product__size">S, M, L</p>
                          </div>
                          <div className="ps-product__content">
                            <div className="ps-product__meta"><a href="shop-2-column.html"></a></div><a className="ps-product__title" href="product-standard.html">Cuffed Beanie</a>
                            <p className="ps-product__price"> $15.00</p>
                            <div className="ps-product__color">
                              <div className="ps-radio ps-radio--color ps-radio--inline color-1">
                                <input className="form-control" type="radio" id="color-558" name="color-5"/>
                                <label for="color-558"></label>
                              </div>
                              <div className="ps-radio ps-radio--color ps-radio--inline color-2">
                                <input className="form-control" type="radio" id="color-59" name="color-5"/>
                                <label for="color-59"></label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid-item">
                      <div className="grid-item__content-wrapper">
                        <div className="ps-product">
                          <div className="ps-product__thumbnail"><a className="ps-product__overlay" href="product-standard.html"></a><a className="ps-product__img" href="product-standard.html"><img src="img/product/best-7-1.jpg" alt=""/></a><a className="ps-product__img-alt" href="product-standard.html"><img src="img/product/best-7-2.jpg" alt=""/></a><a className="ps-product__favorite" href="#"><i className="fa fa-heart-o"></i></a>
                            <ul className="ps-product__actions">
                              <li><a href="product-standard.html">Quick Shop</a></li>
                              <li><a href="product-standard.html">Add to cart</a></li>
                            </ul>
                            <p className="ps-product__size">S, M, L</p>
                          </div>
                          <div className="ps-product__content">
                            <div className="ps-product__meta"><a href="shop-2-column.html"></a></div><a className="ps-product__title" href="product-standard.html">Cyan Boheme</a>
                            <p className="ps-product__price"> $45.00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid-item">
                      <div className="grid-item__content-wrapper">
                        <div className="ps-product">
                          <div className="ps-product__thumbnail"><a className="ps-product__overlay" href="product-standard.html"></a><a className="ps-product__img" href="product-standard.html"><img src="img/product/best-8-1.jpg" alt=""/></a><a className="ps-product__img-alt" href="product-standard.html"><img src="img/product/best-8-2.jpg" alt=""/></a><a className="ps-product__favorite" href="#"><i className="fa fa-heart-o"></i></a>
                            <ul className="ps-product__actions">
                              <li><a href="product-standard.html">Quick Shop</a></li>
                              <li><a href="product-standard.html">Add to cart</a></li>
                            </ul>
                            <p className="ps-product__size">S, M, L</p>
                          </div>
                          <div className="ps-product__content">
                            <div className="ps-product__meta"><a href="shop-2-column.html"></a></div><a className="ps-product__title" href="product-standard.html">Denim Shell Top with Ruffle Front</a>
                            <p className="ps-product__price"> $56.00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid-item">
                      <div className="grid-item__content-wrapper">
                        <div className="ps-product">
                          <div className="ps-product__thumbnail"><a className="ps-product__overlay" href="product-standard.html"></a><a className="ps-product__img" href="product-standard.html"><img src="img/product/trend-1-1.jpg" alt=""/></a><a className="ps-product__img-alt" href="product-standard.html"><img src="img/product/trend-1-2.jpg" alt=""/></a><a className="ps-product__favorite" href="#"><i className="fa fa-heart-o"></i></a>
                            <ul className="ps-product__actions">
                              <li><a href="product-standard.html">Quick Shop</a></li>
                              <li><a href="product-standard.html">Add to cart</a></li>
                            </ul>
                            <p className="ps-product__size">S, M, L</p>
                          </div>
                          <div className="ps-product__content">
                            <div className="ps-product__meta"><a href="shop-2-column.html"></a></div><a className="ps-product__title" href="product-standard.html">Cyan Boheme</a>
                            <p className="ps-product__price"> $85.00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid-item">
                      <div className="grid-item__content-wrapper">
                        <div className="ps-product">
                          <div className="ps-product__thumbnail"><a className="ps-product__overlay" href="product-standard.html"></a><span className="ps-product__badge"><i> - 14.3%</i></span><a className="ps-product__img" href="product-standard.html"><img src="img/product/trend-5-1.jpg" alt=""/></a><a className="ps-product__img-alt" href="product-standard.html"><img src="img/product/trend-5-2.jpg" alt=""/></a><a className="ps-product__favorite" href="#"><i className="fa fa-heart-o"></i></a>
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
                      </div>
                    </div>
                    <div className="grid-item">
                      <div className="grid-item__content-wrapper">
                        <div className="ps-product">
                          <div className="ps-product__thumbnail"><a className="ps-product__overlay" href="product-standard.html"></a><a className="ps-product__img" href="product-standard.html"><img src="img/product/best-6-1.jpg" alt=""/></a><a className="ps-product__img-alt" href="product-standard.html"><img src="img/product/best-6-2.jpg" alt=""/></a><a className="ps-product__favorite" href="#"><i className="fa fa-heart-o"></i></a>
                            <ul className="ps-product__actions">
                              <li><a href="product-standard.html">Quick Shop</a></li>
                              <li><a href="product-standard.html">Add to cart</a></li>
                            </ul>
                            <p className="ps-product__size">S, M, L</p>
                          </div>
                          <div className="ps-product__content">
                            <div className="ps-product__meta"><a href="shop-2-column.html"></a></div><a className="ps-product__title" href="product-standard.html">Cuffed Beanie</a>
                            <p className="ps-product__price"> $15.00</p>
                            <div className="ps-product__color">
                              <div className="ps-radio ps-radio--color ps-radio--inline color-1">
                                <input className="form-control" type="radio" id="color-1076" name="color-10"/>
                                <label for="color-1076"></label>
                              </div>
                              <div className="ps-radio ps-radio--color ps-radio--inline color-2">
                                <input className="form-control" type="radio" id="color-1021" name="color-10"/>
                                <label for="color-1021"></label>
                              </div>
                              <div className="ps-radio ps-radio--color ps-radio--inline color-3">
                                <input className="form-control" type="radio" id="color-1020" name="color-10"/>
                                <label for="color-1020"></label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid-item">
                      <div className="grid-item__content-wrapper">
                        <div className="ps-product">
                          <div className="ps-product__thumbnail"><a className="ps-product__overlay" href="product-standard.html"></a><a className="ps-product__img" href="product-standard.html"><img src="img/product/best-7-1.jpg" alt=""/></a><a className="ps-product__img-alt" href="product-standard.html"><img src="img/product/best-7-2.jpg" alt=""/></a><a className="ps-product__favorite" href="#"><i className="fa fa-heart-o"></i></a>
                            <ul className="ps-product__actions">
                              <li><a href="product-standard.html">Quick Shop</a></li>
                              <li><a href="product-standard.html">Add to cart</a></li>
                            </ul>
                            <p className="ps-product__size">S, M, L</p>
                          </div>
                          <div className="ps-product__content">
                            <div className="ps-product__meta"><a href="shop-2-column.html"></a></div><a className="ps-product__title" href="product-standard.html">Cyan Boheme</a>
                            <p className="ps-product__price"> $45.00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ps-shopping__footer"><a className="ps-btn ps-btn--outline ps-btn--black" href="#">Load more</a></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
