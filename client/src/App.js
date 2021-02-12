import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Routes from "./Routes";
import { LinkContainer } from "react-router-bootstrap";
import { useHistory } from "react-router-dom";
import { AppContext, AuthContext } from "./libs/contextLib";
import { onError } from "./libs/errorLib";
import "./App.css";

function App() {
  const history = useHistory();

  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    if (existingTokens) {
      userHasAuthenticated(true);
    }

    setIsAuthenticating(false);
  }

  async function handleLogout() {
    localStorage.removeItem("tokens");

    userHasAuthenticated(false);

    history.push("/login");
  }

  return (
    !isAuthenticating && (
      <div className="App container py-3">
        <Navbar
          collapseOnSelect
          bg="light"
          expand="md"
          className="mb-3"
          style={{ zIndex: 10 }}
        >
          <LinkContainer to="/">
            <Navbar.Brand className="font-weight-bold text-muted">
              Hektor
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav activeKey={window.location.pathname}>
              {isAuthenticated ? (
                <>
                  <LinkContainer to="/dashboard">
                    <Nav.Link>Dashboard</Nav.Link>
                  </LinkContainer>
                  <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                </>
              ) : (
                <>
                  {/* <LinkContainer to="/signup">
                    <Nav.Link>Signup</Nav.Link>
                  </LinkContainer> */}
                  <LinkContainer to="/login">
                    <Nav.Link>Login</Nav.Link>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
          <AppContext.Provider
            value={{ isAuthenticated, userHasAuthenticated }}
          >
            <Routes />
          </AppContext.Provider>
        </AuthContext.Provider>
      </div>
    )
  );
}

export default App;
