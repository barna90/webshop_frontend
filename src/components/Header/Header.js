import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// const TopHeaderLeft = styled.div(() => ({
//   color: "##878787",
//   display: "flex",
//   alignItems: "center"
// }));

class Header extends Component {
  state = {};

  render() {
    const { itemsInCart } = this.props;
    const headerCenterText = "10.000 Ft felett ingyenes szállítás!";
    const email = "info@melegito.hu";
    const loginRegisterText = "Bejelentkezés / Regisztráció";

    return (
      <>
        <header className="header header--1" data-sticky="true">
          <div className="header__top">
            <div className="header__left">
              <p>
                <span>
                  <i className="pe-7s-call"></i> +01 23456789
                </span>
                <span>
                  <i className="pe-7s-mail"></i>
                  <a href="mailto@gmail.com"> {email}</a>
                </span>
              </p>
            </div>
            <div className="header__center">
              <p>
                {/* Summer sale discount off <span>50%!</span>
                <a href="shop-4-column.html"> Shop Now</a> */}
                {headerCenterText}
              </p>
            </div>
            <div className="header__right">
              {/* <div className="ps-dropdown">
                <a href="#">USD</a>
                <ul className="ps-dropdown-menu">
                  <li>
                    <a href="#">USD</a>
                  </li>
                  <li>
                    <a href="#">SGD</a>
                  </li>
                  <li>
                    <a href="#">AUD</a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
          <div className="navigation">
            <div className="navigation__left">
              <a className="ps-logo" href="index.html">
                <img src={require("../../assets/img/logo.png")} alt="" />
              </a>
            </div>
            <div className="navigation__center">
              <ul className="menu">
                <li className="current-menu-item">
                  <a href={"/"}>Főoldal</a>
                </li>
                <li className="menu-item-has-children">
                  <a href="shop-4-column.html">Termékek</a>
                  <span className="sub-toggle"></span>
                  <ul className="sub-menu">
                    <li>
                      <a href="shop-4-column.html">Női melegítők</a>
                    </li>
                    <li>
                      <a href="shop-metro.html">Férfi melegítők</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="has-badge sale" href="shop-4-column.html">
                    Akciók
                  </a>
                </li>
                <li>
                  <a href={"/szallitas-fizetes/"}>Szállítás, visszaküldés</a>
                </li>
                <li>
                  <a href={"/kapcsolat/"}>Kapcsolat</a>
                </li>
              </ul>
            </div>
            <div className="navigation__right">
              <div className="header__actions">
                <a className="ps-search-btn" href="#">
                  <i className="pe-7s-search"></i>
                </a>
                <div className="ps-dropdown">
                  <a href="#">
                    <i className="pe-7s-user"></i>
                  </a>
                  <ul className="ps-dropdown-menu">
                    <li>
                      <a href={"/bejelentkezes/"}>{loginRegisterText}</a>
                    </li>
                  </ul>
                </div>
                <a href="#">
                  <i className="pe-7s-like"></i>
                </a>
                <a className="ps-cart-toggle" href="#">
                  <i className="pe-7s-shopbag"></i>
                  <span>
                    <i>{itemsInCart.length}</i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </header>
        <header className="header header--mobile" data-sticky="true">
          <div className="header__top">
            <div className="header__left">
              <p>
                <span>
                  <i className="pe-7s-call"></i> +01 23456789
                </span>
                <span>
                  <i className="pe-7s-mail"></i>
                  <a href="mailto@gmail.com"> {email}</a>
                </span>
              </p>
            </div>
            <div className="header__center">
              <p>
                {/* Summer sale discount off <span>50%!</span>
                <a href="shop-4-column.html"> Shop Now</a> */}
                {headerCenterText}
              </p>
            </div>
            <div className="header__right">
              {/* <div className="ps-dropdown">
                <a href="#">USD</a>
                <ul className="ps-dropdown-menu">
                  <li>
                    <a href="#">USD</a>
                  </li>
                  <li>
                    <a href="#">SGD</a>
                  </li>
                  <li>
                    <a href="#">AUD</a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
          <div className="navigation--mobile">
            <div className="navigation__left">
              <div className="menu-toggle">
                <span></span>
              </div>
            </div>
            <div className="navigation__center">
              <a className="ps-logo" href="index.html">
                <img src={require("../../assets/img/logo.png")} alt="" />
              </a>
            </div>
            <div className="navigation__right">
              <div className="header__actions">
                <a className="ps-search-btn" href="#">
                  <i className="pe-7s-search"></i>
                </a>
                <div className="ps-dropdown">
                  <a href="#">
                    <i className="pe-7s-user"></i>
                  </a>
                  <ul className="ps-dropdown-menu">
                    <li>
                      <a href={"/bejelentkezes/"}>{loginRegisterText}</a>
                    </li>
                  </ul>
                </div>
                <a href="#">
                  <i className="pe-7s-like"></i>
                </a>
                <a className="ps-cart-toggle" href="#">
                  <i className="pe-7s-shopbag"></i>
                  <span>
                    <i>{itemsInCart.length}</i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </header>
        <div className="navigation--sidebar">
          <div className="navigation__header">
            <h3>Menu</h3>
            <a className="ps-btn--close ps-btn--no-boder" href="#"></a>
          </div>
          <div className="navigation__content">
            <div className="navigation__actions">
              {/* <div className="ps-dropdown">
                <a href="#">USD</a>
                <ul className="ps-dropdown-menu">
                  <li>
                    <a href="#">USD</a>
                  </li>
                  <li>
                    <a href="#">SGD</a>
                  </li>
                  <li>
                    <a href="#">AUD</a>
                  </li>
                </ul>
              </div> */}
              <div className="header__actions">
                <a className="ps-search-btn" href="#">
                  <i className="pe-7s-search"></i>
                </a>
                <div className="ps-dropdown">
                  <a href="#">
                    <i className="pe-7s-user"></i>
                  </a>
                  <ul className="ps-dropdown-menu">
                    <li>
                      <a href="#">Login</a>
                    </li>
                    <li>
                      <a href="#">Register</a>
                    </li>
                    <li>
                      <a href="#">Whishlist</a>
                    </li>
                  </ul>
                </div>
                <a href="#">
                  <i className="pe-7s-like"></i>
                </a>
              </div>
            </div>
            <ul className="menu--mobile">
              <li className="current-menu-item menu-item-has-children has-mega-menu">
                <a href="index.html">Demo</a>
                <span className="sub-toggle"></span>
                <div className="mega-menu">
                  <div className="mega-menu__column">
                    <h4>
                      Homepage<span className="sub-toggle"></span>
                    </h4>
                    <ul className="mega-menu__list">
                      <li>
                        <a href="index.html">Home 1</a>
                      </li>
                      <li>
                        <a href="homepage-2.html">Home 2</a>
                      </li>
                      <li>
                        <a href="homepage-3.html">Home 3</a>
                      </li>
                      <li>
                        <a href="homepage-4.html">Home 4</a>
                      </li>
                      <li>
                        <a href="homepage-5.html">Home 5</a>
                      </li>
                      <li>
                        <a href="homepage-6.html">Home 6</a>
                      </li>
                      <li>
                        <a href="homepage-7.html">Home 7</a>
                      </li>
                      <li>
                        <a href="homepage-8.html">Home 8</a>
                      </li>
                      <li>
                        <a href="homepage-9.html">Home 9</a>
                      </li>
                      <li>
                        <a className="has-badge" href="homepage-10.html">
                          Home Instagram
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu__column">
                    <h4>
                      Header Layouts<span className="sub-toggle"></span>
                    </h4>
                    <ul className="mega-menu__list">
                      <li>
                        <a href="header-1.html">Header 1</a>
                      </li>
                      <li>
                        <a href="header-2.html">Header 2</a>
                      </li>
                      <li>
                        <a href="header-3.html">Header 3</a>
                      </li>
                      <li>
                        <a href="header-4.html">Header 4</a>
                      </li>
                      <li>
                        <a href="header-5.html">Header 5</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="menu-item-has-children">
                <a className="has-badge" href="shop-4-column.html">
                  Shop
                </a>
                <span className="sub-toggle"></span>
                <ul className="sub-menu">
                  <li>
                    <a href="shop-4-column.html">Grid Layout</a>
                  </li>
                  <li>
                    <a href="shop-metro.html">Metro Layout</a>
                  </li>
                  <li>
                    <a href="shop-masonry.html">Massonry Layout</a>
                  </li>
                  <li>
                    <a href="shop-fullwidth.html">Fullwidth Layout</a>
                  </li>
                  <li>
                    <a href="shop-sidebar.html">Left Sidebar</a>
                  </li>
                  <li>
                    <a href="shop-sidebar-right.html">Right Sidebar</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children has-mega-menu">
                <a href="index.html">Product</a>
                <span className="sub-toggle"></span>
                <div className="mega-menu">
                  <div className="mega-menu__column">
                    <h4>
                      Product detail features
                      <span className="sub-toggle"></span>
                    </h4>
                    <ul className="mega-menu__list">
                      <li>
                        <a href="product-color-swatch.html">
                          Product Color Swatch
                        </a>
                      </li>
                      <li>
                        <a
                          className="has-badge"
                          href="product-gallery-swatch.html"
                        >
                          Product Gallery Swatch
                        </a>
                      </li>
                      <li>
                        <a href="product-image-swatch.html">
                          Product Images Swatch
                        </a>
                      </li>
                      <li>
                        <a href="product-360-video.html">Product 360 Video</a>
                      </li>
                      <li>
                        <a href="product-external.html">
                          External/Affilitte Product
                        </a>
                      </li>
                      <li>
                        <a href="product-group.html">Grouped Product</a>
                      </li>
                      <li>
                        <a className="has-badge hot" href="product-bundle.html">
                          Product Bundle
                        </a>
                      </li>
                      <li>
                        <a href="product-fullwidth.html">
                          Product Full width layout
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu__column">
                    <h4>
                      Product Detail Layout<span className="sub-toggle"></span>
                    </h4>
                    <ul className="mega-menu__list">
                      <li>
                        <a href="product-standard.html">Product Standard</a>
                      </li>
                      <li>
                        <a href="product-gallery.html">Product Gallery</a>
                      </li>
                      <li>
                        <a href="product-sticky.html">Sticky</a>
                      </li>
                      <li>
                        <a
                          className="has-badge hot"
                          href="product-sticky-2.html"
                        >
                          Product Sticky 2
                        </a>
                      </li>
                      <li>
                        <a href="product-thumbnail-outside.html">
                          Product thumbnail at outside
                        </a>
                      </li>
                      <li>
                        <a href="product-thumbnail-bottom.html">
                          Product thumbnail at Bottom
                        </a>
                      </li>
                      <li>
                        <a href="product-thumbnail-right.html">
                          Product thumbnail right
                        </a>
                      </li>
                      <li>
                        <a href="product-accordion.html">Product Accordion</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <a className="has-badge sale" href="shop-4-column.html">
                  Sale
                </a>
              </li>
              <li className="menu-item-has-children">
                <a href="portfolio-2-columns.html">Portfolio</a>
                <span className="sub-toggle"></span>
                <ul className="sub-menu">
                  <li>
                    <a href="portfolio-2-columns.html">Portfolio 2 columns</a>
                  </li>
                  <li>
                    <a href="portfolio-3-columns.html">Portfolio 3 columns</a>
                  </li>
                  <li>
                    <a href="portfolio-4-columns.html">Portfolio 4 columns</a>
                  </li>
                  <li>
                    <a href="portfolio-detail.html">Portfolio Detail</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="lookbook-in-product.html">Lookbook</a>
                <span className="sub-toggle"></span>
                <ul className="sub-menu">
                  <li>
                    <a href="lookbook-in-product.html">Lookbook In Product</a>
                  </li>
                  <li>
                    <a href="lookbook-in-post.html">
                      Lookbook In Single Blog Post
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="blog-grid.html">Blog</a>
                <span className="sub-toggle"></span>
                <ul className="sub-menu">
                  <li>
                    <a href="blog-grid.html">Blog Grid</a>
                  </li>
                  <li>
                    <a href="blog-grid-left-sidebar.html">
                      Blog Grid Left Sidebar
                    </a>
                  </li>
                  <li>
                    <a href="blog-masonry.html">Blog Masonry</a>
                  </li>
                  <li>
                    <a href="blog-detail.html">Blog Detail</a>
                  </li>
                </ul>
              </li>
            </ul>
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

export default connect(mapStateToProps)(Header);
