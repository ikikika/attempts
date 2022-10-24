import React from "react";
import { ChevronUp } from "react-bootstrap-icons";

const ScrollToTopComponent = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="position-fixed top-50 end-0 d-flex justify-content-center align-items-center"
      style={{
        height: 40,
        width: 40,
        backgroundColor: "red",
        cursor: "pointer",
      }}
      onClick={scrollToTop}
    >
      <ChevronUp color="#fff" size={30} />
    </div>
  );
};

export default ScrollToTopComponent;
