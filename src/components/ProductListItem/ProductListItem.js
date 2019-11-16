import React, { Component } from "react";
import { CirclePicker } from "react-color";
import preDefinedColors from "../../style/colors";
import { has, isArray } from "lodash";

class ProductListItem extends Component {
  state = {
    selectedColor: this.props.availableStockInfo
      ? preDefinedColors[Object.keys(this.props.availableStockInfo)[0]]
      : null
  };

  getKeyByValue = (object, value) =>
    Object.keys(object).find(
      key => object[key].toUpperCase() === value.toUpperCase()
    );

  getColors = availableStockInfo => {
    return Object.keys(availableStockInfo);
  };

  hexFromColorNames = colors => {
    if (isArray(colors)) {
      return colors.map(color => {
        if (has(preDefinedColors, color)) {
          return preDefinedColors[color];
        } else {
          return "#FFFFFF";
        }
      });
    } else {
      return "#FFFFFF";
    }
  };

  sizesFormatter = sizes => sizes.join(", ");

  // TODO config image folder
  imageFormatter = imageFileName => {
    return (
      <img
        src={require("../../assets/images/productimages/" + imageFileName)}
        alt=""
      />
    );
  };

  findImageFileNameBySelectedColor = selectedColor => {
    if (selectedColor) {
      const colorName = this.getKeyByValue(preDefinedColors, selectedColor);
      // const selectedImage = this.props.image.find(
      //   img => img.tags.indexOf(colorName) > -1
      // );
      if (colorName && has(this.props.mediaPreview, colorName)) {
        const imageFileName =
          this.props.mediaPreview[colorName].fileId +
          "." +
          this.props.mediaPreview[colorName].extension;
        return this.imageFormatter(imageFileName);
      } else {
        return this.imageFormatter("default.jpg");
      }
    } else {
      console.log("defaultimage");
      return this.imageFormatter("default.jpg");
    }
  };

  getSizesBySelectedColor = selectedColor => {
    if (selectedColor) {
      const colorName = this.getKeyByValue(preDefinedColors, selectedColor);
      return this.sizesFormatter(this.props.sizes[colorName]);
    }
  };

  handleColorChangeComplete = (color, event) => {
    this.setState({
      selectedColor: color.hex
    });
  };

  render() {
    const {
      id,
      title,
      oldPrice,
      price,
      discountPercent,
      availableStockInfo
    } = this.props;

    return (
      <div className="grid-item">
        <div className="grid-item__content-wrapper">
          <div className="ps-product">
            <div className="ps-product__thumbnail">
              <a className="ps-product__overlay" href={"/termek/" + id}></a>
              {discountPercent && (
                <span className="ps-product__badge">
                  <i> - {discountPercent}%</i>
                </span>
              )}
              <a className="ps-product__img" href={"/termek/" + id}>
                {this.findImageFileNameBySelectedColor(
                  this.state.selectedColor
                )}
              </a>
              <a className="ps-product__img-alt" href={"/termek/" + id}>
                {this.findImageFileNameBySelectedColor(
                  this.state.selectedColor
                )}
              </a>
              {/* <a className="ps-product__favorite" href="#">
                <i className="fa fa-heart-o"></i>
              </a> */}
              <ul className="ps-product__actions">
                <li>
                  <a href={"/termek/" + id}>Vasarlas</a>
                </li>
                {/* <li>
                  <a href="#" onClick={e => handleOnAddToCartClick(e, id)}>
                    Add to cart
                  </a>
                </li> */}
              </ul>
              <p className="ps-product__size">
                {this.getSizesBySelectedColor(this.state.selectedColor)}
              </p>
            </div>
            <div className="ps-product__content">
              <div className="ps-product__meta">
                <a href="shop-2-column.html"></a>
              </div>
              <a className="ps-product__title" href={"/termek/" + id}>
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
                <CirclePicker
                  color={
                    this.state.selectedColor
                      ? this.state.selectedColor
                      : "#FFFFFF"
                  }
                  colors={this.hexFromColorNames(
                    this.getColors(availableStockInfo)
                  )}
                  circleSize={17}
                  circleSpacing={4}
                  onChangeComplete={this.handleColorChangeComplete}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductListItem;
