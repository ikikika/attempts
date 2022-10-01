import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { XLg, PersonFill, Search } from "react-bootstrap-icons";

import Logo from "../../assets/logo.svg";

import HeaderData from "../../data/header.json";
import useScrollPosition from "../../hooks/useScrollPosition";
import useCheckMobileScreen from "../../hooks/useCheckMobileScreen";
import HeaderNavIconWithLabel from "./HeaderNavIconWithLabel";

const styles = {
  logo: {
    height: 42,
  },
  logoShrink: {
    height: 30,
  },
};

const SecondaryNav = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
    return () => {
      setShow(false);
    };
  }, []);

  return (
    <Navbar.Collapse id="basic-navbar-nav" className={`${!show ? "fade" : ""}`}>
      <Nav className="w-100 pb-lg-2 justify-content-between">
        {HeaderData.map((data) => (
          <Nav.Link
            href="#home"
            key={data.field_id}
            className="p-lg-0 p-3 border-xl-top"
          >
            {data.title}
          </Nav.Link>
        ))}
      </Nav>
    </Navbar.Collapse>
  );
};

const HeaderComponent = () => {
  const [menuExpanded, setMenuExpanded] = useState(false);

  const [headerState, setHeaderState] = useState(1);
  const scrollPosition = useScrollPosition();
  const isMobile = useCheckMobileScreen();

  useEffect(() => {
    if (scrollPosition < 76) {
      setHeaderState(1);
    } else if (scrollPosition > 76) {
      setHeaderState(2);
    }
  }, [scrollPosition]);

  return (
    <>
      <Navbar
        expand="lg"
        // sticky="top"
        onToggle={(e) => {
          setMenuExpanded(!menuExpanded);
        }}
        className="border-lg-bottom sticky-top"
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
                    headerState === 1 && !isMobile
                      ? styles.logo
                      : styles.logoShrink
                  }
                  src={Logo}
                  alt="logo"
                />
              </Navbar.Brand>

              <Nav className="flex-row order-2 order-lg-2">
                <HeaderNavIconWithLabel
                  headerState={headerState}
                  icon={<PersonFill size={30} />}
                  label="Sign In"
                />
                <HeaderNavIconWithLabel
                  headerState={headerState}
                  icon={<Search size={30} />}
                  label="Search"
                />
              </Nav>
              {headerState === 2 && <SecondaryNav />}
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                className="order-lg-3 order-0"
              >
                {menuExpanded && <XLg size={30} />}
              </Navbar.Toggle>
            </Nav>
            {headerState === 1 && <SecondaryNav />}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderComponent;
