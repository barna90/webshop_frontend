import React, { Component } from "react";
import { connect } from "react-redux";
import CartProduct from "./CartProduct/CartProduct";
import { sumBy } from "lodash";

class ShopCart extends Component {
  state = {};

  renderProductsInCart = () => {
    const { itemsInCart } = this.props;
    return itemsInCart.map(item => (
      <CartProduct
        key={item.id}
        id={item.id}
        name={item.name}
        price={item.price}
      />
    ));
  };

  sumProductsInCart = () => {
    const { itemsInCart } = this.props;
    return sumBy(itemsInCart, "price");
  };

  render() {
    return (
      <div className="ps-cart--sidebar">
        <div className="ps-cart__header">
          <h3>Mini Cart</h3>
          <a className="ps-btn--close ps-btn--no-boder" href="#"></a>
        </div>
        <div className="ps-cart__content">{this.renderProductsInCart()}</div>
        <div className="ps-cart__footer">
          <h4>
            SubTotal: <span>{this.sumProductsInCart()} Ft</span>
          </h4>
          <a className="ps-btn" href={"/kosar/"}>
            Kosár
          </a>
          <a className="ps-btn" href={"/rendeles/"}>
            Pénztár
          </a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    itemsInCart: state.cart.addedItems
  };
};

export default connect(mapStateToProps)(ShopCart);
