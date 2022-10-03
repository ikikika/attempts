import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Fade from "react-bootstrap/Fade";
import Stack from "react-bootstrap/Stack";
import { XLg, PersonFill, Search } from "react-bootstrap-icons";

import Logo from "../../assets/images/logo.svg";
import HeaderData from "../../data/header.json";
import useScrollPosition from "../../hooks/useScrollPosition";
import useCheckScreenSize from "../../hooks/useCheckScreenSize";
import HeaderNavIconWithLabel from "./HeaderNavIconWithLabel";

const styles = {
  logo: {
    height: 42,
  },
  logoShrink: {
    height: 30,
  },
};

const SecondaryNav = ({
  headerState,
  screenSize,
}: {
  headerState: number;
  screenSize: number;
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    return () => {
      setShow(false);
    };
  }, []);

  let fontSize = 16;

  if (screenSize === 4) {
    if (headerState === 1) {
      fontSize = 14;
    } else if (headerState === 2) {
      fontSize = 10;
    }
  } else if (screenSize === 5) {
    if (headerState === 1) {
      fontSize = 16;
    } else if (headerState === 2) {
      fontSize = 13;
    }
  }

  return (
    <Fade in={show && screenSize > 3}>
      <Navbar.Collapse
        id="basic-navbar-nav"
        className={`${!show ? "fade" : ""}`}
      >
        <Nav className="w-100 justify-content-between">
          {HeaderData.map((data) => (
            <Nav.Link
              key={data.field_id}
              className="p-lg-2 p-3 border-xl-top"
              style={{ fontSize: fontSize }}
            >
              {data.title}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Fade>
  );
};

const HeaderComponent = () => {
  const [menuExpanded, setMenuExpanded] = useState(false);

  const [headerState, setHeaderState] = useState(1);
  const scrollPosition = useScrollPosition();
  const screenSize = useCheckScreenSize();

  useEffect(() => {
    if (scrollPosition < 76) {
      setHeaderState(1);
    } else if (scrollPosition > 76 && scrollPosition < 176) {
      setHeaderState(2);
    } else if (scrollPosition > 176) {
      setHeaderState(3);
    }
  }, [scrollPosition]);

  /*
xxl xl lg - 176 state 3 with social
md - 144 state 4 with 2 share
*/
  return (
    <>
      <Navbar
        expand="lg"
        // sticky="top"
        onToggle={(e) => {
          setMenuExpanded(!menuExpanded);
        }}
        className="border-bottom sticky-top"
      >
        <Container>
          <Nav className="d-flex flex-column w-100 justify-content-between">
            <Nav
              className={`d-flex flex-row justify-content-between ${
                headerState === 1 ? "pb-lg-4" : ""
              }`}
            >
              <Navbar.Brand className="order-lg-0 order-1">
                <img
                  style={
                    screenSize > 3 &&
                    (headerState === 1 || !(headerState === 3))
                      ? styles.logo
                      : styles.logoShrink
                  }
                  src={Logo}
                  alt="logo"
                />
              </Navbar.Brand>
              {headerState !== 3 && (
                <Stack
                  direction="horizontal"
                  gap={3}
                  className="flex-row order-2 order-lg-2 p-0"
                >
                  <HeaderNavIconWithLabel
                    headerState={headerState}
                    icon={<PersonFill size={20} />}
                    label="Sign In"
                  />
                  <HeaderNavIconWithLabel
                    headerState={headerState}
                    icon={<Search size={20} />}
                    label="Search"
                  />
                </Stack>
              )}

              {headerState === 2 && (
                <SecondaryNav
                  screenSize={screenSize}
                  headerState={headerState}
                />
              )}
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                className="order-lg-3 order-0"
              >
                {menuExpanded && <XLg size={30} />}
              </Navbar.Toggle>
            </Nav>
            {headerState === 1 && (
              <SecondaryNav screenSize={screenSize} headerState={headerState} />
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderComponent;
