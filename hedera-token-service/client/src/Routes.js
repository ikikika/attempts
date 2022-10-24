import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Dashboard from "./containers/Dashboard";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import NotFound from "./containers/NotFound";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <UnauthenticatedRoute exact path="/login">
        <Login />
      </UnauthenticatedRoute>

      <AuthenticatedRoute exact path="/dashboard">
        <Dashboard />
      </AuthenticatedRoute>

      {/* Finally, catch all unmatched routes */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
