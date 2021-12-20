import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CommonLogin from "../pages/commonlogin/CommonLogin";
import Dashboard from "../pages/dashboard/Dashboard";
import Wishlist from "../pages/wishlist/Wishlist";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={CommonLogin} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/Wishlist" component={Wishlist} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Router;
