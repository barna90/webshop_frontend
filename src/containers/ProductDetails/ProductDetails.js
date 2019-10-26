import React, { Component } from "react";
import { connect } from "react-redux";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import ProductDescription from "../../components/ProductDescription/ProductDescription";
import CartSticky from "../../components/CartSticky/CartSticky";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";
import { getProduct } from "../../store/actions/productActions";

class ProductDetails extends Component {
  state = {};

  componentWillMount(){
    this.props.getProduct(this.props.match.params.id);
  }

  render() {

    const { product } = this.props;

    if (product) {
    return (
      <>
        <Breadcrumb />
        <ProductDescription name={product.name} />
        <CartSticky />
        <RelatedProducts />
      </>
    );
    } else {
      return "LOADING...";
    }
  }
}

const mapStateToProps = state => {
  return {
    product: state.product.product
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProduct: id => {
      dispatch(getProduct(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails);