import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Main from "./Pages/Main/Main";
import ProductList from "./Pages/ProductList/ProductList";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Footer from "./Components/Footer/Footer";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route excat path="/productlist" component={ProductList} />
          <Route excat path="/productdetail" component={ProductDetail} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
