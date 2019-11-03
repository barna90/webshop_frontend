import React, { Component } from "react";
import { connect } from "react-redux";
import { uniq } from 'lodash';
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

  handleOnAddToCartClick = quantity => {
    const { product } = this.props;
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
      this.props.addToCart(product, variationId, selectedColorName, selectedSize, quantity);
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
    const index = parameters &&
      parameters.findIndex(param => param.name === parameterName);

    if (index >= 0) {
      return index === 0 ? "" : index + 1;
    } else {
      return null;
    }
  };

  getDistinctParamValueFromVariations = (variations, parameters, parameterName) => {
    const paramIndex = this.findParamIndexInParameters(parameters, parameterName);
    if (paramIndex !== null) {
      return uniq(variations.filter(variation => 
        variation["parameter" + paramIndex])
                        .map(variation => 
        variation["parameter" + paramIndex]))
    } else {
      return []
    }
  };

  getDistinctSizesFromVariationsBySelectedColor = (variations, parameters) => {
    const { selectedColor } = this.state;
    const selectedColorName = this.getKeyByValue(
      preDefinedColors,
      selectedColor
    );

    const colorParamIndex = this.findParamIndexInParameters(parameters, "Szín");
    const sizeParamIndex = this.findParamIndexInParameters(parameters, "Méret");
    if (colorParamIndex !== null && sizeParamIndex !== null) {
      return uniq(variations.filter(variation => 
        variation["parameter" + colorParamIndex] && 
        variation["parameter" + sizeParamIndex] && 
        variation["parameter" + colorParamIndex] === selectedColorName)
          .map(variation => 
        variation["parameter" + sizeParamIndex]));
    } else {
      return []
    }
  };

  getVariationsCountBySelectedColorAndSize = (variations, parameters) => {
    const { selectedColor, selectedSize } = this.state;
    const selectedColorName = this.getKeyByValue(
      preDefinedColors,
      selectedColor
    );

    const colorParamIndex = this.findParamIndexInParameters(parameters, "Szín");
    const sizeParamIndex = this.findParamIndexInParameters(parameters, "Méret");
    if (colorParamIndex != null && sizeParamIndex != null && selectedSize) {
      return variations.filter(variation => 
        variation["parameter" + colorParamIndex] && 
        variation["parameter" + sizeParamIndex] && 
        variation["parameter" + colorParamIndex] === selectedColorName &&
        variation["parameter" + sizeParamIndex] === selectedSize
        ).length;
    } else {
      return 0;
    }
  }

  getSelectedVariationId = (variations, parameters) => {
    const { selectedColor, selectedSize } = this.state;
    const selectedColorName = this.getKeyByValue(
      preDefinedColors,
      selectedColor
    );

    const colorParamIndex = this.findParamIndexInParameters(parameters, "Szín");
    const sizeParamIndex = this.findParamIndexInParameters(parameters, "Méret");
    if (colorParamIndex != null && sizeParamIndex != null && selectedSize) {
      return variations.find(variation => 
        variation["parameter" + colorParamIndex] && 
        variation["parameter" + sizeParamIndex] && 
        variation["parameter" + colorParamIndex] === selectedColorName &&
        variation["parameter" + sizeParamIndex] === selectedSize
        ).id;
    } else {
      return null;
    }
  }

  selectFirstColorIfNull = () => {
    const { product } = this.props;

    const colors = product &&
      product.variations &&
      product.parameters &&
      this.getDistinctParamValueFromVariations(product.variations, product.parameters, "Szín");

      return colors && colors.length > 0 ? preDefinedColors[colors[0]] : null;
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
          <ProductDescription
            name={product.name}
            price={product.price}
            images={product.media}
            colors={
              this.getDistinctParamValueFromVariations(
                product.variations, 
                product.parameters, 
                "Szín"
            )}
            sizes={
              this.sortColors(this.getDistinctSizesFromVariationsBySelectedColor(
                product.variations,
                product.parameters
            ))}
            variationsCount={this.getVariationsCountBySelectedColorAndSize(
              product.variations,
              product.parameters
            )}
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
            variationsCount={this.getVariationsCountBySelectedColorAndSize(
              product.variations,
              product.parameters
            )}
          />
          <RelatedProducts />
        </>
      );
    } else if (product && !selectedColor) {
      this.setState({
        selectedColor: this.selectFirstColorIfNull()
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
    addToCart: (id, brandId, selectedColorName, selectedSize, quantity) => {
      dispatch(addToCart(id, brandId, selectedColorName, selectedSize, quantity));
    },
    getProduct: (id) => {
      dispatch(getProduct(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails);
