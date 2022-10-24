import React from "react";
import { Route } from "react-router-dom";

export default ({
  component: Component,
  props: componentProps,
  auth: authProps,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => <Component {...props} {...componentProps} />}
  />
);
