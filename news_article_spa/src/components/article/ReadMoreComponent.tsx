import React from "react";
import { ChevronRight } from "react-bootstrap-icons";

const styles = {
  wrapper: {
    backgroundColor: "var(--c-muted)",
  },
  textNormal: {
    fontSize: "var(--fs-article-cta)",
    fontWeight: 500,
    fontFamily: "var(--ff-article-cta)",
    lineHeight: "var(--lh-article-cta)",
  },
  textEmphasis: {
    fontSize: "var(--fs-category-l)",
    fontWeight: 600,
    fontFamily: "var(--ff-category-l)",
    lineHeight: "var(--lh-category-l)",
    textTransform: "uppercase" as "uppercase",
    color: "var(--c-primary)",
  },
  textCta: {
    fontSize: "var(--fs-button-s)",
    fontWeight: 500,
    fontFamily: "var(--ff-button-s)",
    lineHeight: "var(--lh-button-s)",
    color: "var(--c-primary)",
  },
};

const ReadMoreComponent = () => {
  return (
    <a
      href="https://www.todayonline.com/taxonomy/term/14366"
      style={styles.wrapper}
      className="px-4 py-3 mb-4 d-flex flex-row justify-content-between align-items-center"
    >
      <div className="d-flex flex-column flex-md-row align-items-center">
        <span className="me-1" style={styles.textNormal}>Read more of the latest in</span>
        <span style={styles.textEmphasis}>Singapore</span>
      </div>
      <div style={styles.textCta}>
        Explore now <ChevronRight />
      </div>
    </a>
  );
};

export default ReadMoreComponent;
