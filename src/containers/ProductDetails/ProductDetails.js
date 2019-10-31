import React, { Component } from "react";
import { connect } from "react-redux";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import ProductDescription from "../../components/ProductDescription/ProductDescription";
import CartSticky from "../../components/CartSticky/CartSticky";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";
import { getProduct } from "../../store/actions/productActions";
import { addToCart } from "../../store/actions/cartActions";
import preDefinedColors from "../../style/colors";

class ProductDetails extends Component {
  state = {
    selectedColor: null,
    selectedSize: null
  };

  componentWillMount() {
    this.props.getProduct(this.props.match.params.id);
  }

  handleOnAddToCartClick = (e, id) => {
    e.preventDefault();

    const { selectedColor, selectedSize } = this.state;

    if (selectedColor && selectedSize) {
      const selectedColorName = this.getKeyByValue(
        preDefinedColors,
        selectedColor
      );
      this.props.addToCart(id, selectedColorName, selectedSize);
    } else {
      // TODO normalis hibauzenet
      alert("Kerem valasszon meretet es szint!");
    }
  };

  handleColorChangeComplete = color => {
    this.setState({
      selectedColor: color.hex
    });
  };

  selectSize = size => {
    this.setState({
      selectedSize: size
    });
  };

  selectFirstColorIfNull = product => {
    return this.props.product &&
      this.props.product.colors &&
      this.props.product.colors.length > 0
      ? preDefinedColors[this.props.product.colors[0]]
      : null;
  };

  getKeyByValue = (object, value) =>
    Object.keys(object).find(
      key => object[key].toUpperCase() === value.toUpperCase()
    );

  render() {
    const { product } = this.props;
    const { selectedColor, selectedSize } = this.state;

    if (product && selectedColor) {
      return (
        <>
          <Breadcrumb categoryName={product.categoryName} />
          {product && (
            <ProductDescription
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              colors={product.colors}
              sizes={product.sizes}
              handleOnAddToCartClick={this.handleOnAddToCartClick}
              selectedColor={selectedColor}
              selectedSize={selectedSize}
              selectSize={this.selectSize}
              handleColorChangeComplete={this.handleColorChangeComplete}
            />
          )}
          <CartSticky
            id={product.id}
            handleOnAddToCartClick={this.handleOnAddToCartClick}
          />
          <RelatedProducts />
        </>
      );
    } else if (product && !selectedColor) {
      this.setState({
        selectedColor: this.selectFirstColorIfNull(product)
      });

      return "LOADING...";
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
    addToCart: (id, selectedColorName, selectedSize) => {
      dispatch(addToCart(id, selectedColorName, selectedSize));
    },
    getProduct: id => {
      dispatch(getProduct(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails);
