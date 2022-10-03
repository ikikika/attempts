import React from "react";
import AuthorDataType from "../../types/AuthorDataType";
import Image from "react-bootstrap/Image";
import moment from "moment";
import SocialMediaWrapperComponent from "../header/SocialMediaWrapperComponent";

interface Props {
  publishedDate: string;
  updatedDate: string;
  authorData: AuthorDataType;
}

const styles = {
  thumbnail: {
    height: 50,
  },
  byText: {
    color: "var(--c-heading-inverse)",
    fontSize: "var(--fs-author-by-h6)",
    fontWeight: 300,
    fontFamily: "var(--ff-author-by-h6)",
    lineHeight: "var(--lh-author-by-h6)",
  },
  authorName: {
    color: "var(--c-heading-inverse)",
    fontSize: "var(--fs-author-h6)",
    fontWeight: 300,
    fontFamily: "var(--ff-author-h6)",
    lineHeight: "var(--lh-author-h6)",
  },
  dateLabel: {
    color: "var(--c-heading-inverse)",
    fontSize: "var(--fs-article-date-text)",
    fontWeight: 400,
    fontFamily: "var(--ff-article-date-text)",
    lineHeight: "var(--lh-article-date-text)",
  },
  dateValue: {
    color: "var(--c-heading-inverse)",
    fontSize: "var(--fs-article-date)",
    fontWeight: 600,
    fontFamily: "var(--ff-article-date)",
    lineHeight: "var(--lh-article-date)",
  },
};

const BylineComponent = (props: Props) => {
  const { publishedDate, updatedDate, authorData } = props;
  return (
    <div className="d-flex flex-column">
      <div className="mb-4 d-flex flex-md-column align-items-md-start flex-lg-row align-items-lg-center">
        <a href={authorData.url}>
          <Image
            src={authorData.thumbnail}
            roundedCircle
            fluid
            style={styles.thumbnail}
            className="me-3"
          />
        </a>
        <a href={authorData.url}>
          <div>
            <span className="me-1" style={styles.byText}>
              BY
            </span>
            <span className="text-uppercase" style={styles.authorName}>
              {authorData.title}
            </span>
          </div>
        </a>
      </div>
      <div style={styles.dateValue}>
        <span className="me-1 d-inline" style={styles.dateLabel}>
          Published
        </span>
        {moment(publishedDate).format("MMMM DD, YYYY")}
      </div>
      <div style={styles.dateValue}>
        <span className="me-1 d-inline" style={styles.dateLabel}>
          Updated
        </span>
        {moment(updatedDate).format("MMMM DD, YYYY")}
      </div>
      <SocialMediaWrapperComponent />
    </div>
  );
};

export default BylineComponent;
