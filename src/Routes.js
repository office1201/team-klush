import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import ProductList from './Pages/ProductList/ProductList';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Cart from './Pages/Cart/Cart';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/productList" component={ProductList} />
          <Route exact path="/productDetail" component={ProductDetail} />
          <Route exact path="/products/:id" component={ProductDetail} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
