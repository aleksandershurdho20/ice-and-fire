import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RouteData from "./DynamicRoutes/DynamicRoutes";
export default function Routes() {
  return (
    <Router>
      <Switch>
        {RouteData.map((route, index) => (
          <Route
            path={route.path}
            exact
            component={route.component}
            key={index}
          />
        ))}
      </Switch>
    </Router>
  );
}
