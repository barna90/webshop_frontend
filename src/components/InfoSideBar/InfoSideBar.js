import React, { Component } from "react";

class InfoSideBar extends Component {
  state = {};

  render() {
    return (
      <>
        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 ">
          <aside className="widget widget_shop widget_category">
            <h3 className="widget-title">Categories</h3>
            <ul className="ps-list--plus">
              <li><a href="shop-4-column.html">Beauty (4)</a></li>
              <li><a href="shop-4-column.html">Fashion (6)</a></li>
              <li><a href="shop-4-column.html">Food (3)</a></li>
              <li><a href="shop-4-column.html">Life Style (7)</a></li>
              <li><a href="shop-4-column.html">Travel (6)</a></li>
            </ul>
          </aside>
          <aside className="widget widget_shop widget_recent-post">
            <h3 className="widget-title">Recent Posts</h3>
            <div className="ps-post--sidebar-simple"><a className="ps-post__title" href="blog-detail.html">Spring – Summer Trending 2017</a>
              <p>December 24, 2015</p>
            </div>
            <div className="ps-post--sidebar-simple"><a className="ps-post__title" href="blog-detail.html">The Easiest Way to Break Out on Top</a>
              <p>December 24, 2015</p>
            </div>
            <div className="ps-post--sidebar-simple"><a className="ps-post__title" href="blog-detail.html">Style for couple in Weeding season</a>
              <p>December 24, 2015</p>
            </div>
            <div className="ps-post--sidebar-simple"><a className="ps-post__title" href="blog-detail.html">Story of a girl December 24, 2015</a>
              <p>December 24, 2015</p>
            </div>
            <div className="ps-post--sidebar-simple"><a className="ps-post__title" href="blog-detail.html">Best Street Style Moments</a>
              <p>December 24, 2015</p>
            </div>
          </aside>
          <aside className="widget widget_shop widget_instagram">
            <h3 className="widget-title">Instagram Feed</h3>
            <ul>
              <li><a href="#"><img src={require("../../assets/img/blog/instagram/1.jpg")} alt="" /></a></li>
              <li><a href="#"><img src={require("../../assets/img/blog/instagram/2.jpg")} alt="" /></a></li>
              <li><a href="#"><img src={require("../../assets/img/blog/instagram/3.jpg")} alt="" /></a></li>
              <li><a href="#"><img src={require("../../assets/img/blog/instagram/4.jpg")} alt="" /></a></li>
              <li><a href="#"><img src={require("../../assets/img/blog/instagram/5.jpg")} alt="" /></a></li>
              <li><a href="#"><img src={require("../../assets/img/blog/instagram/6.jpg")} alt="" /></a></li>
              <li><a href="#"><img src={require("../../assets/img/blog/instagram/7.jpg")} alt="" /></a></li>
              <li><a href="#"><img src={require("../../assets/img/blog/instagram/8.jpg")} alt="" /></a></li>
              <li><a href="#"><img src={require("../../assets/img/blog/instagram/9.jpg")} alt="" /></a></li>
            </ul>
          </aside>
          <aside className="widget widget_shop widget_comment">
            <h3 className="widget-title">Recent Comment</h3>
            <div className="ps-post--recent-comment"><a href="#">Selena Richardson on<strong> The Easiest Way to Break Out on Top</strong></a></div>
            <div className="ps-post--recent-comment"><a href="#">Monica Jork on<strong> Men in style</strong></a></div>
            <div className="ps-post--recent-comment"><a href="#">Monica Jork on<strong> Story of a girl</strong></a></div>
            <div className="ps-post--recent-comment"><a href="#">Monica Jork on<strong> The Easiest Way to Break Out on Top</strong></a></div>
          </aside>
          <aside className="widget widget_shop widget_tags">
            <h3 className="widget-title">Blog Tags</h3><a href="blog-grid.html">beauty</a><a href="blog-grid.html">fashion</a><a href="blog-grid.html">Food</a><a href="blog-grid.html">Street Style</a><a href="blog-grid.html">Travel</a><a href="blog-grid.html">trending</a>
          </aside>
          <aside className="widget widget_shop widget_products">
            <h3 className="widget-title">Sale Products</h3>
            <div className="ps-product--sidebar">
              <div className="ps-product__thumbnail"><a href="product-standard.html"><img src={require("../../assets/img/product/best-2-1.jpg")} alt="" /></a></div>
              <div className="ps-product__content"><a href="product-standard.html">Calvin Klein Logo Sweatpants</a>
                <p>$38.99</p>
              </div>
            </div>
            <div className="ps-product--sidebar">
              <div className="ps-product__thumbnail"><a href="product-standard.html"><img src={require("../../assets/img/product/best-3-1.jpg")} alt="" /></a></div>
              <div className="ps-product__content"><a href="product-standard.html">Short Sleeved Hoodie With Step Hem</a>
                <p className="sale"><del>$168.99</del> – $178.99</p>
              </div>
            </div>
            <div className="ps-product--sidebar">
              <div className="ps-product__thumbnail"><a href="product-standard.html"><img src={require("../../assets/img/product/best-4-1.jpg")} alt="" /></a></div>
              <div className="ps-product__content"><a href="product-standard.html">Pink Leather Watch</a>
                <p>$38.99</p>
              </div>
            </div>
            <div className="ps-product--sidebar">
              <div className="ps-product__thumbnail"><a href="product-standard.html"><img src={require("../../assets/img/product/best-4-1.jpg")} alt="" /></a></div>
              <div className="ps-product__content"><a href="product-standard.html">Pink Leather With Step Hem</a>
                <p className="sale"><del>$168.99</del> – $178.99</p>
              </div>
            </div>
            <div className="ps-product--sidebar">
              <div className="ps-product__thumbnail"><a href="product-standard.html"><img src={require("../../assets/img/product/trend-4-1.jpg")} alt="" /></a></div>
              <div className="ps-product__content"><a href="product-standard.html">Pink T-search</a>
                <p className="sale"><del>$168.99</del> – $178.99</p>
              </div>
            </div>
          </aside>
        </div>
      </>
    );
  }
}

export default InfoSideBar;
