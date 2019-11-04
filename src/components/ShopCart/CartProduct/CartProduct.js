import React, { Component } from "react";
import { connect } from "react-redux";
import { removeItem } from "../../../store/actions/cartActions";

class CartProduct extends Component {
  state = {};

  onRemoveClick = () => {
    const { id, variationId } = this.props;
    this.props.removeItem(id, variationId);
  };

  render() {
    const {
      name,
      price,
      quantity,
      selectedColor,
      selectedSize,
      coverImageFileName
    } = this.props;

    return (
      <div className="ps-product--cart">
        <div className="ps-product__thumbnail">
          <a href="product-standard.html">
            <img
              src={require("../../../assets/images/productimages/" +
                coverImageFileName)}
              alt=""
            />
          </a>
          <span
            className="ps-btn--close ps-btn--no-boder"
            onClick={this.onRemoveClick}
          ></span>
        </div>
        <div className="ps-product__content">
          <a href="#">
            {name} - {selectedColor}, {selectedSize}
          </a>
          <span>
            {quantity}x {price} Ft
          </span>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeItem: (id, variationId) => {
      dispatch(removeItem(id, variationId));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CartProduct);
