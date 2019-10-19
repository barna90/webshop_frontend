import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Users from "./containers/Users/Users";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SideBar from "./components/SideBar/SideBar";
import Back2Top from "./components/Back2Top/Back2Top";
import Loader from "./components/Loader/Loader";
import Search from "./components/Search/Search";
import ShopCart from "./components/ShopCart/ShopCart";
import ProductDetails from "./containers/ProductDetails/ProductDetails";
import Contact from "./containers/Contact/Contact";
import FAQ from "./containers/FAQ/FAQ";
import ShoppingCart from "./containers/ShoppingCart/ShoppingCart";
import Checkout from "./containers/Checkout/Checkout";
import MyAccount from "./containers/MyAccount/MyAccount";
import OrdersTracking from "./containers/OrdersTracking/OrdersTracking";

class App extends Component {
  state = {};

  render() {
    return (
      <Router>
        <div>
          <Header />

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/productdetails">
              <ProductDetails />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/kapcsolat">
              <Contact />
            </Route>
            <Route path="/szallitas-fizetes">
              <FAQ />
            </Route>
            <Route path="/kosar">
              <ShoppingCart />
            </Route>
            <Route path="/rendeles">
              <Checkout />
            </Route>
            <Route path="/bejelentkezes">
              <MyAccount />
            </Route>
            <Route path="/nyomkovetes">
              <OrdersTracking />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

          <Footer />
          <SideBar />
          <Back2Top />
          <Loader />
          <Search />
          <ShopCart />
        </div>
      </Router>
    );
  }
}

export default App;
