import React, { Component } from "react";
import { connect } from "react-redux";
import { removeItem } from "../../../store/actions/cartActions";

class ShoppingCartProductRow extends Component {
  state = {};

  onRemoveClick = e => {
    e.preventDefault();
    const { id, variationId } = this.props;
    this.props.removeItem(id, variationId);
  };

  render() {
    const { name, price, selectedColor, selectedSize, coverImageFileName } = this.props;

    return (
      <tr>
        <td>
          <a href="product-standard.html">
            <img
              src={require("../../../assets/images/productimages/" + coverImageFileName)}
              alt=""
            />
          </a>
        </td>
        <td>
          <a href="product-standard.html">{name} - {selectedColor}, {selectedSize}</a>
        </td>
        <td>{price} Ft</td>
        <td>
          <div className="form-group--number">
            <button className="up">
              <i className="fa fa-plus"></i>
            </button>
            <button className="down">
              <i className="fa fa-minus"></i>
            </button>
            <input
              className="form-control"
              type="text"
              placeholder="1"
              value="1"
            />
          </div>
        </td>
        <td>
          <p>$45.00</p>
          <a
            className="ps-btn--close ps-btn--no-boder"
            href="#"
            onClick={this.onRemoveClick}
          ></a>
        </td>
      </tr>
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
)(ShoppingCartProductRow);
