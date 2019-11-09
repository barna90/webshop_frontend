import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import ProductListItem from "../../components/ProductListItem/ProductListItem";
import { addToCart } from "../../store/actions/cartActions";
import { getProductList } from "../../store/actions/productListActions";

class Home extends Component {
  state = {
    isLoading: true
  };

  componentWillMount() {
    this.props.getProductList();
    this.getProductList();
  }

  // fetchUsers = () => {
  //   fetch(`https://jsonplaceholder.typicode.com/users`)
  //     .then(response => response.json())
  //     .then(data =>
  //       this.setState({
  //         users: data,
  //         isLoading: false
  //       })
  //     )

  //     .catch(error => this.setState({ error, isLoading: false }));
  // };

  getProduct() {
    axios
      .get("http://localhost:8080/api/products/9")
      .then(response => response.data)
      .then(product => {
        this.setState({
          product,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  getProductList() {
    const instance = axios.create({
      baseUrl: "http;//localhost:8080",
      headers: { "x-webshopId": 1 }
    });

    const body = { page: 0, pageSize: 10 };

    instance
      .post("http://localhost:8080/api/products/search", body)
      .then(response => response.data)
      .then(productList => {
        this.setState({
          productList,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  // handleOnAddToCartClick = (e, id) => {
  //   e.preventDefault();
  //   this.props.addToCart(id);
  // };

  onLoadMoreClick = e => {
    e.preventDefault();
    this.setState(prevState => ({
      maxItems: prevState.maxItems + 3
    }));
  };

  renderProductItems = productItems => {
    //const { maxItems } = this.state;

    return productItems.map(item => (
      <ProductListItem
        key={item.id}
        id={item.id}
        title={item.name}
        oldPrice={item.oldPrice}
        price={item.price}
        image={item.image}
        imageUrl={item.imageUrl}
        imageUrlAlt={item.imageUrlAlt}
        sizes={item.sizes}
        colors={item.colors}
        discountPercent={
          item.oldPrice
            ? Math.round(
                ((item.price - item.oldPrice) / item.oldPrice) * -100 * 10
              ) / 10
            : null
        }
        // handleOnAddToCartClick={this.handleOnAddToCartClick}
      />
    ));
  };

  render() {
    const { productItems } = this.props;
    const { productList, isLoading } = this.state;

    if (!isLoading) {
      console.log("product", productList);
    }

    return (
      <>
        <div className="ps-page">
          <ul className="ps-list--categories">
            <li>
              <a href="shop-4-column.html">Női melegítők</a>
            </li>
            <li>
              <a href="shop-4-column.html">Férfi melegítők</a>
            </li>
          </ul>
          <div
            className="ps-hero bg--cover"
            data-background={require("../../assets/img/hero/shop.jpg")}
          >
            <div className="container">
              <h1>Shop All Products</h1>
              <p>Online fashion, furniture, handmade... store</p>
            </div>
          </div>
          <div className="ps-shopping ps-shop--masonry">
            <div className="container">
              <div className="ps-filter--shopping">
                <a className="ps-filter__trigger" href="#" id="filter-sidebar">
                  <i className="fa fa-sliders"></i>
                </a>
                <div className="ps-filter__column-switch">
                  <a className="two" href="shop-2-masonry.html"></a>
                  <a className="three" href="shop-3-masonry.html"></a>
                  <a className="active four" href="shop-masonry.html"></a>
                  <a className="six" href="shop-6-masonry.html"></a>
                </div>
                <div className="form-group--select">
                  <i className="fa fa-angle-down"></i>
                  <div className="form-group__content">
                    <select className="form-control">
                      <option value="1">Sort by Lastest</option>
                      <option value="1">Sort by Price</option>
                      <option value="1">Sort by Average Rating</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="ps-shopping__content">
                <div
                  className="masonry-wrapper"
                  data-col-lg="4"
                  data-col-md="3"
                  data-col-sm="2"
                  data-col-xs="1"
                  data-gap="30"
                  data-radio="100%"
                >
                  <div className="ps-masonry">
                    <div className="grid-sizer"></div>
                    {this.renderProductItems(productItems)}
                  </div>
                </div>
              </div>
              {/* {productItems && maxItems < productItems.length && (
                <div className="ps-shopping__footer">
                  <a
                    className="ps-btn ps-btn--outline ps-btn--black"
                    href="#"
                    onClick={this.onLoadMoreClick}
                  >
                    Load more
                  </a>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    productItems: state.productList.productItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id));
    },
    getProductList: () => {
      dispatch(getProductList());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
