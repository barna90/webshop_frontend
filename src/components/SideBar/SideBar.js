import React, { Component } from "react";

class Sidebar extends Component {
  state = {};

  render() {
    return (
      <div className="ps-filter--sidebar">
        <div className="ps-filter__header">
          <h3>Filter</h3><a className="ps-btn--close ps-btn--no-boder" href="#"></a>
        </div>
        <div className="ps-filter__content">
          <aside className="widget widget_shop widget_brand">
            <h3 className="widget-title">Filter by Brand</h3><a href="#">CK</a><a href="#">H&M</a><a href="#">Manga</a><a href="#">Nike</a>
          </aside>
          <aside className="widget widget_filter widget_shop">
            <h3 className="widget-title">Filter by price</h3>
            <p className="ps-slider__meta">Price:<span className="ps-slider__value ps-slider__min"></span>-<span className="ps-slider__value ps-slider__max"></span></p>
            <div className="ps-slider" data-default-min="0" data-default-max="500" data-max="1000" data-step="100" data-unit="$"></div><a className="ps-btn ps-btn--black ps-btn--outline" href="#">Filter</a>
          </aside>
          <aside className="widget widget_shop widget_color">
            <h3 className="widget-title">By Color</h3>
            <div className="ps-checkbox ps-checkbox--color color-sidebar color-1 ps-checkbox--inline">
              <input className="form-control" type="checkbox" id="color-1" name="size"/>
              <label htmlFor="color-1"></label>
            </div>
            <div className="ps-checkbox ps-checkbox--color color-sidebar color-2 ps-checkbox--inline">
              <input className="form-control" type="checkbox" id="color-2" name="size"/>
              <label htmlFor="color-2"></label>
            </div>
            <div className="ps-checkbox ps-checkbox--color color-sidebar color-3 ps-checkbox--inline">
              <input className="form-control" type="checkbox" id="color-3" name="size"/>
              <label htmlFor="color-3"></label>
            </div>
            <div className="ps-checkbox ps-checkbox--color color-sidebar color-4 ps-checkbox--inline">
              <input className="form-control" type="checkbox" id="color-4" name="size"/>
              <label htmlFor="color-4"></label>
            </div>
            <div className="ps-checkbox ps-checkbox--color color-sidebar color-5 ps-checkbox--inline">
              <input className="form-control" type="checkbox" id="color-5" name="size"/>
              <label htmlFor="color-5"></label>
            </div>
            <div className="ps-checkbox ps-checkbox--color color-sidebar color-6 ps-checkbox--inline">
              <input className="form-control" type="checkbox" id="color-6" name="size"/>
              <label htmlFor="color-6"></label>
            </div>
            <div className="ps-checkbox ps-checkbox--color color-sidebar color-7 ps-checkbox--inline">
              <input className="form-control" type="checkbox" id="color-7" name="size"/>
              <label htmlFor="color-7"></label>
            </div>
            <div className="ps-checkbox ps-checkbox--color color-sidebar color-8 ps-checkbox--inline">
              <input className="form-control" type="checkbox" id="color-8" name="size"/>
              <label htmlFor="color-8"></label>
            </div>
            <div className="ps-checkbox ps-checkbox--color color-sidebar color-9 ps-checkbox--inline">
              <input className="form-control" type="checkbox" id="color-9" name="size"/>
              <label htmlFor="color-9"></label>
            </div>
          </aside>
          <aside className="widget widget_shop widget_size">
            <h3 className="widget-title">By Size</h3>
            <div className="form-group--select"><i className="fa fa-angle-down"></i>
              <div className="form-group__content">
                <select className="form-control">
                  <option value="1">SM</option>
                  <option value="2">M</option>
                  <option value="3">L</option>
                  <option value="4">XL</option>
                </select>
              </div>
            </div>
          </aside>
        </div>
      </div>
    );
  }
}

export default Sidebar;
