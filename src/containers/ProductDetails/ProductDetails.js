import React, { Component } from "react";
import { connect } from "react-redux";
import { uniq, isArray } from "lodash";
import axios from "axios";
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
    selectedSize: null,
    product: null
  };

  componentWillMount() {
    // this.props.getProduct(this.props.match.params.id);
    this.getProduct();
  }

  getProduct() {
    axios
      .get("http://localhost:8080/api/products/" + this.props.match.params.id)
      .then(response => response.data)
      .then(product => {
        this.setState({
          product,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  handleOnAddToCartClick = quantity => {
    const { product } = this.state;
    const { selectedColor, selectedSize } = this.state;

    if (selectedColor && selectedSize) {
      const selectedColorName = this.getKeyByValue(
        preDefinedColors,
        selectedColor
      );
      const variationId = this.getSelectedVariationId(
        product.variations,
        product.parameters
      );
      if (variationId !== null) {
        this.props.addToCart(
          product,
          variationId,
          selectedColorName,
          selectedSize,
          quantity
        );

        return true;
      } else {
        return false;
      }
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

  // TODO commons
  sortColors = colors => {
    const colorsArray = [];
    if (colors.includes("S")) colorsArray.push("S");
    if (colors.includes("M")) colorsArray.push("M");
    if (colors.includes("L")) colorsArray.push("L");
    if (colors.includes("XL")) colorsArray.push("XL");
    if (colors.includes("XXL")) colorsArray.push("XXL");
    if (colors.includes("3XL")) colorsArray.push("3XL");
    return colorsArray;
  };

  findParamIndexInParameters = (parameters, parameterName) => {
    const index =
      parameters && parameters.findIndex(param => param.name === parameterName);

    if (index >= 0) {
      return index === 0 ? "" : index + 1;
    } else {
      return null;
    }
  };

  // getDistinctParamValueFromVariations = (
  //   variations,
  //   parameters,
  //   parameterName
  // ) => {
  //   const paramIndex = this.findParamIndexInParameters(
  //     parameters,
  //     parameterName
  //   );
  //   if (paramIndex !== null) {
  //     return uniq(
  //       variations
  //         .filter(variation => variation["parameter" + paramIndex])
  //         .map(variation => variation["parameter" + paramIndex])
  //     );
  //   } else {
  //     return [];
  //   }
  // };

  getColors = () => {
    const availableStockInfo = JSON.parse(
      this.state.product.availableStockInfo
    );
    return Object.keys(availableStockInfo);
  };

  // getDistinctSizesFromVariationsBySelectedColor = (variations, parameters) => {
  //   const { selectedColor } = this.state;
  //   const selectedColorName = this.getKeyByValue(
  //     preDefinedColors,
  //     selectedColor
  //   );

  //   const colorParamIndex = this.findParamIndexInParameters(parameters, "Szín");
  //   const sizeParamIndex = this.findParamIndexInParameters(parameters, "Méret");
  //   if (colorParamIndex !== null && sizeParamIndex !== null) {
  //     return uniq(
  //       variations
  //         .filter(
  //           variation =>
  //             variation["parameter" + colorParamIndex] &&
  //             variation["parameter" + sizeParamIndex] &&
  //             variation["parameter" + colorParamIndex] === selectedColorName
  //         )
  //         .map(variation => variation["parameter" + sizeParamIndex])
  //     );
  //   } else {
  //     return [];
  //   }
  // };

  getSizesFromSelectedColor = () => {
    const { product } = this.state;
    const { selectedColor } = this.state;
    const selectedColorName = this.getKeyByValue(
      preDefinedColors,
      selectedColor
    );
    const availableStockInfo = JSON.parse(product.availableStockInfo);
    return availableStockInfo[selectedColorName];
  };

  getVariationsCountBySelectedColorAndSize = () => {
    const { selectedColor, selectedSize } = this.state;
    const { product } = this.state;
    const selectedColorName = this.getKeyByValue(
      preDefinedColors,
      selectedColor
    );

    const colorParamIndex = "";
    // this.findParamIndexInParameters(
    //   product.parameters,
    //   "Szín"
    // );
    const sizeParamIndex = 2;
    // this.findParamIndexInParameters(
    //   product.parameters,
    //   "Méret"
    // );
    if (colorParamIndex != null && sizeParamIndex != null && selectedSize) {
      return product.variations.filter(
        variation =>
          variation["parameter" + colorParamIndex] &&
          variation["parameter" + sizeParamIndex] &&
          variation["parameter" + colorParamIndex] === selectedColorName &&
          variation["parameter" + sizeParamIndex] === selectedSize &&
          !this.cartContainsProduct(product.id, variation.id)
      ).length;
    } else {
      return 0;
    }
  };

  cartContainsProduct = (productId, variationId) => {
    const { itemsInCart } = this.props;
    return (
      itemsInCart.filter(
        item => item.id === productId && item.variationId === variationId
      ).length > 0
    );
  };

  getSelectedVariationId = () => {
    const { selectedColor, selectedSize } = this.state;
    const { product } = this.state;
    const selectedColorName = this.getKeyByValue(
      preDefinedColors,
      selectedColor
    );

    // TODO param
    const colorParamIndex = ""; // this.findParamIndexInParameters(parameters, "Szín");
    const sizeParamIndex = 2; // this.findParamIndexInParameters(parameters, "Méret");
    if (colorParamIndex != null && sizeParamIndex != null && selectedSize) {
      const selectedVariation = product.variations.find(
        variation =>
          variation["parameter" + colorParamIndex] &&
          variation["parameter" + sizeParamIndex] &&
          variation["parameter" + colorParamIndex] === selectedColorName &&
          variation["parameter" + sizeParamIndex] === selectedSize &&
          !this.cartContainsProduct(product.id, variation.id)
      );
      return selectedVariation ? selectedVariation.id : null;
    } else {
      return null;
    }
  };

  selectFirstColorIfNull = () => {
    const { product } = this.state;
    const availableStockInfo = product
      ? JSON.parse(product.availableStockInfo)
      : null;
    const color = availableStockInfo
      ? preDefinedColors[Object.keys(availableStockInfo)[0]]
      : null;

    this.setState({
      selectedColor: color ? color : "#FFFFFF"
    });
  };

  getKeyByValue = (object, value) =>
    Object.keys(object).find(
      key => object[key].toUpperCase() === value.toUpperCase()
    );

  render() {
    const { selectedColor, selectedSize, product } = this.state;

    if (product && selectedColor) {
      return (
        <>
          <Breadcrumb categoryName={product.categoryName} />
          <ProductDescription
            name={product.name}
            price={product.price}
            // images={product.media}
            mediaPreview={JSON.parse(product.mediaPreview)}
            // colors={this.getDistinctParamValueFromVariations(
            //   product.variations,
            //   product.parameters,
            //   "Szín"
            // )}
            colors={this.getColors()}
            // sizes={this.sortColors(
            //   this.getDistinctSizesFromVariationsBySelectedColor(
            //     product.variations,
            //     product.parameters
            //   )
            // )}
            sizes={this.getSizesFromSelectedColor()}
            variationsCount={this.getVariationsCountBySelectedColorAndSize()}
            handleOnAddToCartClick={this.handleOnAddToCartClick}
            selectedColor={selectedColor}
            selectedSize={selectedSize}
            selectSize={this.selectSize}
            handleColorChangeComplete={this.handleColorChangeComplete}
          />
          <CartSticky
            id={product.id}
            handleOnAddToCartClick={this.handleOnAddToCartClick}
            selectedColor={selectedColor}
            selectedSize={selectedSize}
            variationsCount={this.getVariationsCountBySelectedColorAndSize()}
          />
          <RelatedProducts />
        </>
      );
    } else if (product && !selectedColor) {
      this.selectFirstColorIfNull();
      return "LOADING...";
    } else {
      return "LOADING...";
    }
  }
}

const mapStateToProps = state => {
  return {
    // product: state.product.product,
    itemsInCart: state.cart.addedItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (id, brandId, selectedColorName, selectedSize, quantity) => {
      dispatch(
        addToCart(id, brandId, selectedColorName, selectedSize, quantity)
      );
    },
    getProduct: id => {
      dispatch(getProduct(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
