import React, { Component } from "react";
import styled from "@emotion/styled";

const ProductRow = styled.div(() => ({
  display: "flex",
  alignItems: "center"
}));

const ProducName = styled.p(() => ({
  paddingLeft: 5
}));

class CheckoutProductRow extends Component {
  state = {};

  render() {
    const { name, price, selectedColor, selectedSize, quantity, coverImageFileName } = this.props;

    return (
      <tr>
        <td>
          <ProductRow>
            <a href="#">
              <img
                src={require("../../../assets/images/productimages/" + coverImageFileName)}
                alt=""
              />
            </a>
            <ProducName>{name} - {selectedColor}, {selectedSize} × {quantity}</ProducName>
          </ProductRow>
        </td>
        <td>{price} Ft</td>
      </tr>
    );
  }
}

export default CheckoutProductRow;
