import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Layout from "./hoc/Layout/Layout";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Users from "./containers/Users/Users";
import Header from "./components/Header/Header";

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
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
