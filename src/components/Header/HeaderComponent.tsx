import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Fade from "react-bootstrap/Fade";
import Stack from "react-bootstrap/Stack";
import { XLg, PersonFill, Search } from "react-bootstrap-icons";

import Logo from "../../assets/images/logo.svg";
import useScrollPosition from "../../hooks/useScrollPosition";
import useCheckScreenSize from "../../hooks/useCheckScreenSize";
import HeaderNavIconWithLabel from "./HeaderNavIconWithLabel";
import { useAppSelector } from "../../hooks/reduxHooks";
import { RootState } from "../../redux/store";
import CategoryDataType from "../../types/CategoryDataType";
import SocialMediaWrapperComponent from "./SocialMediaWrapperComponent";

const styles = {
  logo: {
    height: 42,
  },
  logoShrink: {
    height: 30,
  },
  tertiaryNavCategory: {
    fontSize: "var(--fs-category)",
    fontWeight: 600,
    fontFamily: "var(--ff-category)",
    lineHeight: "var(--lh-category)",
    color: "var(--c-link)",
  },
  tertiaryNavTitle: {
    fontSize: "var(--fs-text-xs)",
    lineHeight: "var(--lh-text-xs)",
    fontFamily: "var(--ff-text-xs)",
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

  const header = useAppSelector((state: RootState) => state.header);

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
          {header.data.map((data, index) => (
            <Nav.Link
              href={data.url}
              key={index}
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

const TertiaryNav = ({
  title,
  category,
}: {
  title: string;
  category: CategoryDataType;
}) => {
  return (
    <div className="d-flex flex-row w-100 justify-content-between">
      <div className="d-flex flex-column w-100 flex-start pe-2">
        <a
          href={`http://www.todayonline.com/${category.link}`}
          style={styles.tertiaryNavCategory}
        >
          {category.name}
        </a>
        <div style={styles.tertiaryNavTitle}>{title}</div>
      </div>
      <div className="d-none d-lg-inline">
        <SocialMediaWrapperComponent />
      </div>
      <div className="d-inline d-lg-none">
        <SocialMediaWrapperComponent minimised />
      </div>
    </div>
  );
};

const HeaderComponent = () => {
  const [menuExpanded, setMenuExpanded] = useState(false);
  const [headerState, setHeaderState] = useState(1);
  const scrollPosition = useScrollPosition();
  const screenSize = useCheckScreenSize();
  const article = useAppSelector((state: RootState) => {
    return {
      title: state.article.data.title,
      category: state.article.data.category,
    };
  });

  useEffect(() => {
    if (scrollPosition < 76) {
      setHeaderState(1);
    } else if (scrollPosition > 144 && screenSize <= 3) {
      setHeaderState(4);
    } else if (scrollPosition > 76 && scrollPosition < 176) {
      setHeaderState(2);
    } else if (scrollPosition > 176) {
      setHeaderState(3);
    }
  }, [screenSize, scrollPosition]);

  return (
    <>
      <Navbar
        expand="lg"
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
              {headerState === 2 ? (
                <SecondaryNav
                  screenSize={screenSize}
                  headerState={headerState}
                />
              ) : headerState === 3 ? (
                <TertiaryNav
                  title={article.title}
                  category={article.category}
                />
              ) : headerState === 4 ? (
                <></>
              ) : (
                <></>
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
        {headerState === 4 && screenSize <= 3 && (
          <div className="position-absolute w-100 h-100 bg-white px-3 py-1 overflow-hidden">
            <TertiaryNav title={article.title} category={article.category} />
          </div>
        )}
      </Navbar>
    </>
  );
};

export default HeaderComponent;
