import React, { Component } from "react";
import { CirclePicker } from 'react-color';

class ProductListItem extends Component {
  state = {};

  // TODO config image folder
  imageFormatter = image => (
    <img src={require("../../assets/img/" + image)} alt="" />
  );

  sizesFormatter = sizes => sizes.join(", ");

  handleChangeComplete = (color, event) => {
    console.log(color);
  };

  render() {
    const {
      id,
      title,
      oldPrice,
      price,
      imageUrl,
      imageUrlAlt,
      sizes,
      discountPercent,
      handleOnAddToCartClick
    } = this.props;

    return (
      <div className="grid-item">
        <div className="grid-item__content-wrapper">
          <div className="ps-product">
            <div className="ps-product__thumbnail">
              <a
                className="ps-product__overlay"
                href={'/termek/' + id}
              ></a>
              {discountPercent && (
                <span className="ps-product__badge">
                  <i> - {discountPercent}%</i>
                </span>
              )}
              <a className="ps-product__img" href={'/termek/' + id}>
                {this.imageFormatter(imageUrl)}
              </a>
              <a className="ps-product__img-alt" href={'/termek/' + id}>
                {this.imageFormatter(imageUrlAlt)}
              </a>
              <a className="ps-product__favorite" href="#">
                <i className="fa fa-heart-o"></i>
              </a>
              <ul className="ps-product__actions">
                <li>
                  <a href={'/termek/' + id}>Quick Shop</a>
                </li>
                <li>
                  <a href="#" onClick={e => handleOnAddToCartClick(e, id)}>
                    Add to cart
                  </a>
                </li>
              </ul>
              <p className="ps-product__size">{this.sizesFormatter(sizes)}</p>
            </div>
            <div className="ps-product__content">
              <div className="ps-product__meta">
                <a href="shop-2-column.html"></a>
              </div>
              <a className="ps-product__title" href={'/termek/' + id}>
                {title}
              </a>
              {oldPrice && (
                <p className="ps-product__price sale">
                  {" "}
                  <del>{oldPrice} Ft</del>
                  {price} Ft
                </p>
              )}
              {!oldPrice && <p className="ps-product__price">{price} Ft</p>}
              <div className="ps-product__color">
                {/* <div className="ps-radio ps-radio--color ps-radio--inline color-1">
                  <input
                    className="form-control"
                    type="radio"
                    id="color-445"
                    name="color-4"
                  />
                  <label htmlFor="color-445"></label>
                </div>
                <div className="ps-radio ps-radio--color ps-radio--inline color-2">
                  <input
                    className="form-control"
                    type="radio"
                    id="color-432"
                    name="color-4"
                  />
                  <label htmlFor="color-432"></label>
                </div>
                <div className="ps-radio ps-radio--color ps-radio--inline color-3">
                  <input
                    className="form-control"
                    type="radio"
                    id="color-488"
                    name="color-4"
                  />
                  <label htmlFor="color-488"></label>
                </div> */}
                <CirclePicker colors={['#4D4D4D', '#999999', '#000000']} circleSize={17} circleSpacing={4} onChangeComplete={ this.handleChangeComplete } />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductListItem;
