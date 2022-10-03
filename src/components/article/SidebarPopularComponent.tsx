import React from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SideBarPropsType from "../../types/SideBarPropsType";

const styles = {
  sectionLabel: {
    color: "var(--c-heading)",
    fontSize: "var(--fs-also-worth)",
    fontWeight: 600,
    fontFamily: "var(--ff-also-worth)",
    lineHeight: "var(--lh-also-worth)",
  },
  title: {
    fontSize: 14,
    fontWeight: 600,
  },
};

const SidebarPopularComponent = ({
  sidebarData,
}: {
  sidebarData: SideBarPropsType[];
}) => {
  return (
    <div className="mb-5">
      <Row>
        <Col>
          <div className="pt-0 pb-3 mb-0" style={styles.sectionLabel}>Popular</div>
        </Col>
      </Row>
      {sidebarData.map((data, index) => (
        <React.Fragment key={index}>
          <Row >
            <Col xs={5} md={3} lg={5}>
              <a href={data.click_through_url}>
                <Image fluid src={data.thumbnail} />
              </a>
            </Col>
            <Col xs={7} md={9} lg={7}>
              <a href={data.click_through_url} className="d-inline-block" style={styles.title}>
                {data.title}
              </a>
            </Col>
          </Row>
          {sidebarData.length > index + 1 && <hr />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default SidebarPopularComponent;
