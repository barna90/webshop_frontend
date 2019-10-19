import React, { Component } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import ProductDescription from "../../components/ProductDescription/ProductDescription";
import CartSticky from "../../components/CartSticky/CartSticky";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";

class ProductDetails extends Component {
  state = {};

  render() {
    return (
      <>
        <Breadcrumb />
        <ProductDescription />
        <CartSticky />
        <RelatedProducts />
      </>
    );
  }
}

export default ProductDetails;
