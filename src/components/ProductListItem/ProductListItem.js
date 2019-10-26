import React, { Component } from "react";
import { CirclePicker } from 'react-color';
import preDefinedColors from '../../style/colors';

class ProductListItem extends Component {
  state = {
    selectedColor: this.props.colors && this.props.colors.length > 0 ? 
                      preDefinedColors[this.props.colors[0]] : null,
  };

  getKeyByValue = (object, value) => Object.keys(object).find(key => object[key].toUpperCase() === value.toUpperCase());

  hexFromColorNames = colors => colors.map(color => preDefinedColors[color]);

  sizesFormatter = sizes => sizes.join(", ");

  // TODO config image folder
  imageFormatter = image => (
    <img src={require("../../assets/images/productimages/" + image)} alt="" />
  );

  findImageFileNameBySelectedColor = selectedColor => {
    console.log("selectedColor", selectedColor);
    const colorName = this.getKeyByValue(preDefinedColors, selectedColor);
    const selectedImage = this.props.image.find(img => img.tags.indexOf(colorName) > -1);
    return selectedImage ? this.imageFormatter(selectedImage.fileName) : null;
  };

  handleChangeComplete = (color, event) => {
    this.setState({
      selectedColor: color.hex,
    });
  };

  render() {
    const {
      id,
      title,
      oldPrice,
      price,
      image,
      sizes,
      colors,
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
                {this.findImageFileNameBySelectedColor(this.state.selectedColor)}
              </a>
              <a className="ps-product__img-alt" href={'/termek/' + id}>
                {this.findImageFileNameBySelectedColor(this.state.selectedColor)}
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
                <CirclePicker 
                  color={this.state.selectedColor} 
                  colors={this.hexFromColorNames(colors)} 
                  circleSize={17} 
                  circleSpacing={4} 
                  onChangeComplete={ this.handleChangeComplete } />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductListItem;
