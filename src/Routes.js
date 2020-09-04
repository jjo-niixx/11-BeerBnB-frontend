import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Main from "./Pages/Main/Main";
import ProductList from "./Pages/ProductList/ProductList";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Footer from "./Components/Footer/Footer";
import LoginModal from "./Components/Nav/Components/LoginModal";
import SignupModal from "./Components/Nav/Components/SignupModal";
import SignupModalEmail from "./Components/Nav/Components/SignupModalEmail";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/productlist" component={ProductList} />
          <Route exact path="/productdetail" component={ProductDetail} />
          <Route exact path="/login" component={LoginModal} />
          <Route exact path="/signupmodal" component={SignupModal} />
          <Route exact path="/signupmodalemail" component={SignupModalEmail} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
