import React from "react";
import parse from "html-react-parser";

import ReadAlsoPropsType from "../../types/ReadAlsoPropsType";

interface Props {
  contentBodyData: string | undefined;
  readAlsoData: ReadAlsoPropsType[];
}

const styles = {
  readAlsoWrapper: {
    backgroundColor: "var(--c-muted-accent-light)",
  },
  readAlsoLabel: {
    fontSize: "var(--fs-text-xs)",
    fontFamily: "var(--ff-text-xs)",
    fontWeight: 600,
    color: "var(--c-primary)",
  },
  readAlsoLink: {
    fontSize: "var(--fs-text-xs)",
    fontFamily: "var(--ff-text-xs)",
    lineHeight: "var(--lh-h5)",
  },
};

const ReadAlsoComponent = ({
  readAlsoSingleData,
}: {
  readAlsoSingleData: ReadAlsoPropsType;
}) => {
  return (
    <div className="read-also-wrapper mb-3 ms-3 p-3 float-end" style={styles.readAlsoWrapper}>
      <h4 className="text-uppercase pb-0 mb-1" style={styles.readAlsoLabel}>Read Also</h4>
      <a href={readAlsoSingleData.link} className="d-inline-block" style={styles.readAlsoLink}>
        {readAlsoSingleData.title}
      </a>
    </div>
  );
};

const ArticleContentBodyComponent = (props: Props) => {
  const { contentBodyData, readAlsoData } = props;

  const parsedBody = parse(
    contentBodyData !== undefined ? contentBodyData : ""
  );

  let bodyWithReadAlso: JSX.Element[] = [];
  if (Array.isArray(parsedBody)) {
    let insertCounts = {
      countP: 0,
      readAlsoArrayIndex: 0,
    };
    parsedBody.forEach((data) => {
      if (data.type === "p" && insertCounts.countP < 5) {
        bodyWithReadAlso.push(data);
        insertCounts.countP++;
      } else if (
        data.type === "p" &&
        insertCounts.countP === 5 &&
        insertCounts.readAlsoArrayIndex < readAlsoData.length
      ) {
        bodyWithReadAlso.push({
          type: `p+read_also`,
          props: data.props.children,
          key: `readAlso${insertCounts.readAlsoArrayIndex}`,
        });
        insertCounts.countP = 0;
        insertCounts.readAlsoArrayIndex++;
      } else {
        bodyWithReadAlso.push(data);
      }
    });
  }

  return (
    <>
      {Array.isArray(bodyWithReadAlso) &&
        bodyWithReadAlso.map((data) => {
          if (data.type === "p") {
            return (
              <p key={data.key}>{data.props.children}</p>
            );
          } else if (data.type === "p+read_also") {
            const readOnlyIndex: number =
              data.key != null
                ? parseInt(data.key.toString().replace("readAlso", ""))
                : -1;
            return (
              <React.Fragment key={data.key}>
                <p>{data.props}</p>
                {readOnlyIndex !== -1 && (
                  <ReadAlsoComponent
                    readAlsoSingleData={readAlsoData[readOnlyIndex]}
                  />
                )}
              </React.Fragment>
            );
          } else {
            return (
              <React.Fragment key={data.key}>{data}</React.Fragment>
            );
          }
        })}
    </>
  );
};

export default ArticleContentBodyComponent;
