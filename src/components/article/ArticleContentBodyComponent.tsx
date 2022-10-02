import React from "react";
import parse from "html-react-parser";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReadAlsoProps from "../../types/ReadAlsoProps";

interface Props {
  contentBodyData: string | undefined;
  readAlsoData: ReadAlsoProps[];
}

const ReadAlsoComponent = ({
  readAlsoSingleData,
}: {
  readAlsoSingleData: ReadAlsoProps;
}) => {
  return <>{readAlsoSingleData.title}</>;
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
              <Row key={data.key}>
                <Col>
                  <p>{data.props.children}</p>
                </Col>
              </Row>
            );
          } else if (data.type === "p+read_also") {
            const readOnlyIndex: number =
              data.key != null
                ? parseInt(data.key.toString().replace("readAlso", ""))
                : -1;

            return (
              <Row key={data.key}>
                <Col xs={8}>
                  <p>{data.props}</p>
                </Col>
                <Col xs={4}>
                  {readOnlyIndex !== -1 && (
                    <ReadAlsoComponent
                      readAlsoSingleData={readAlsoData[readOnlyIndex]}
                    />
                  )}
                </Col>
              </Row>
            );
          } else {
            return (
              <Row key={data.key}>
                <Col>{data}</Col>
              </Row>
            );
          }
        })}
    </>
  );

};

export default ArticleContentBodyComponent;
