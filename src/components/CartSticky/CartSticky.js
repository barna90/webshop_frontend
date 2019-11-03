import React, { Component } from "react";

class CartSticky extends Component {
  state = {
    quantity: 1,
    showQuantityError: false,
    showSizeOrColorError: false,
  };

  incrementQuantity = () => {
    this.setState(prevState => ({
      quantity: prevState.quantity + 1
    }));
  };

  decrementQuantity = () => {
    this.setState(prevState => ({
      quantity: prevState.quantity + -1
    }));
  };

  onIncrementQuantityClick = () => {
    const { variationsCount } = this.props;
    const { quantity } = this.state;

    if (variationsCount > quantity) {
      this.incrementQuantity();
    } else {
      this.setState({
        showQuantityError: true
      });
      setTimeout( () => {
        this.setState({
          showQuantityError: false
        });
      }, 5000);
    }
  };

  onDecrementQuantityClick = () => {
    const { quantity } = this.state;

    if (quantity > 1) {
      this.decrementQuantity();
    }
  };

  onAddTocartClick = e => {
    e.preventDefault();
    const { handleOnAddToCartClick, selectedColor, selectedSize } = this.props;
    const { quantity } = this.state;

    if (selectedColor && selectedSize) {
      handleOnAddToCartClick(quantity);
    } else {
      this.setState({
        showSizeOrColorError: true
      });
      setTimeout( () => {
          this.setState({
            showSizeOrColorError: false
          });
      }, 5000);
    }
  }

  render() {
    const { id, variationsCount, selectedSize, selectedColor } = this.props;
    const { showQuantityError, showSizeOrColorError } = this.state;

    console.log(variationsCount);

    return (
      <div id="cart-sticky">
        <span className={"ps-variant__tooltip " + ((showQuantityError || showSizeOrColorError) ? 'cartStickyShowToolTip' : '')}>
        {
          (this.state.showSizeOrColorError && !(selectedSize && selectedColor)) ?
          <span>Kosárba rakás előtt válassza ki a kívánt színt és méretet!</span> :
          this.state.showQuantityError ? 
          <span>A kiválasztott színből és méretből maximum {variationsCount} db van készleten.</span> : 
          <span>&nbsp;</span>
        }
        </span>
        {selectedSize && selectedColor && (
          <div className="form-group--number">
          <button className="up" onClick={variationsCount > 0 ? this.onIncrementQuantityClick : undefined}>
            <i className="fa fa-plus"></i>
          </button>
          <button className="down" onClick={this.onDecrementQuantityClick}>
            <i className="fa fa-minus"></i>
          </button>
          <input className="form-control" type="text" placeholder={this.state.quantity} readOnly />
          </div>
        )}
        <a
          className="ps-btn"
          href="#"
          onClick={e => this.onAddTocartClick(e, id)}
        >
          Add to cart
        </a>
      </div>
    );
  }
}

export default CartSticky;
