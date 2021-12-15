import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CommonLogin from "../pages/commonlogin/CommonLogin";
import Dashboard from "../pages/dashboard/Dashboard";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={CommonLogin} />
          <Route path="/Dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Router;
