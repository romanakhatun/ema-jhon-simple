import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Shop from "./Components/Shop/Shop";
import Review from "./Components/Review/Review";
import Inventory from "./Components/Inventory/Inventory";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NoMatch from "./Components/NoMatch/NoMatch";
import ProductDetail from "./Components/Product/ProductDetail";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>

          <Route path="/shop">
            <Shop />
          </Route>

          <Route path="/order-review">
            <Review />
          </Route>

          <Route path="/inventory">
            <Inventory />
          </Route>

          <Route exact path="/">
            <Shop />
          </Route>

          <Route path="/product/:productKey">
            <ProductDetail />
          </Route>

          <Route path="*">
            <NoMatch />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
