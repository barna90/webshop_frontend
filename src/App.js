import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';

class App extends Component {
  state = {};

  render() {

    return (
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
    );
  }
}

export default withRouter(App);
