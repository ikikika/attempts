import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import { useAppContext, useAuth } from "../libs/contextLib";

export default function AuthenticatedRoute({ children, ...rest }) {
  const { pathname, search } = useLocation();
  const { isAuthenticated } = useAppContext();
  const { authTokens } = useAuth();
  return (
    <Route {...rest}>
      {isAuthenticated && authTokens ? (
        children
      ) : (
        <Redirect to={`/login?redirect=${pathname}${search}`} />
      )}
    </Route>
  );
}
