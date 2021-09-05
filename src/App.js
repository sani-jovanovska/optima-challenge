import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./menu";
import ProductList from "./products";

function App() {
  return (
    <Router>
      <div className="main">
        <Switch>
          {/* <Route path={`/${items.url}` === "/"}  component={Menu} />  */}
          <Route path="/" exact component={Menu} />
          <Route path="/aboutus" component={Menu} />
          <Route path="/career" component={Menu} />
          <Route path="/company" component={Menu} />
          <Route path="/services" component={Menu} />
          <Route path="/contact" component={Menu} />
          <Route path="/products" component={ProductList} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
