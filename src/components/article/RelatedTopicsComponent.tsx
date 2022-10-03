import React from "react";
import TopicsDataType from "../../types/TopicsDataType";

const styles = {
  wrapper: {
    borderBottom: "solid 1px var(--c-border)",
  },
  sectionLabel: {
    color: "var(--c-heading)",
    fontSize: "var(--fs-topics-h2)",
    fontWeight: 600,
    fontFamily: "var(--ff-topics-h2)",
    lineHeight: "var(--lh-topics-h2)",
  },
  link: {
    letterSpacing: -0.23,
    border: "solid 1px var(--c-border)",
    fontSize: "var(--fs-topics-link)",
    fontWeight: 400,
    fontFamily: "var(--ff-topics-link)",
    lineHeight: "var(--lh-topics-link)",
  },
};

const RelatedTopicsComponent = ({
  topicsData,
}: {
  topicsData: TopicsDataType[];
}) => {
  return (
    <div className="pt-0 border-top-0 pb-3 mb-4" style={styles.wrapper}>
      <div className="text-uppercase mb-4" style={styles.sectionLabel}>Related Topics</div>
      {topicsData.map((data, index) => (
        <a
          key={index}
          className="d-inline-block px-2 py-1 mx-1 mt-1 mb-0 text-uppercase"
          style={styles.link}
          target="_blank"
          href={`https://www.todayonline.com${data.link}`}
          rel="noreferrer"
        >
          {data.name}
        </a>
      ))}
    </div>
  );
};

export default RelatedTopicsComponent;
