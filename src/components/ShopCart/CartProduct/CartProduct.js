import React, { Component } from "react";
import { connect } from "react-redux";
import { removeItem } from "../../../store/actions/cartActions";

class CartProduct extends Component {
  state = {};

  onRemoveClick = () => {
    const { id } = this.props;
    this.props.removeItem(id);
  };

  render() {
    const { name, price } = this.props;

    return (
      <div className="ps-product--cart">
        <div className="ps-product__thumbnail">
          <a href="product-standard.html">
            <img
              src={require("../../../assets/img/product/best-5-1.jpg")}
              alt=""
            />
          </a>
          <span
            className="ps-btn--close ps-btn--no-boder"
            onClick={this.onRemoveClick}
          ></span>
        </div>
        <div className="ps-product__content">
          <a href="#">{name}</a>
          <span>1x {price} Ft</span>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeItem: id => {
      dispatch(removeItem(id));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CartProduct);
