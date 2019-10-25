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
    const { name, price } = this.props;

    return (
      <tr>
        <td>
          <ProductRow>
            <a href="#">
              <img
                src={require("../../../assets/img/product/best-2-1.jpg")}
                alt=""
              />
            </a>
            <ProducName>{name} - Cyan, M × 1</ProducName>
          </ProductRow>
        </td>
        <td>{price} Ft</td>
      </tr>
    );
  }
}

export default CheckoutProductRow;
