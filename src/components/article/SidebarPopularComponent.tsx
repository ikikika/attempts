import React from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SidebarProps from "../../types/SideBarProps";

const SidebarPopularComponent = ({
  sidebarData,
}: {
  sidebarData: SidebarProps[];
}) => {
  return (
    <>
      <Row>
        <Col>Popular</Col>
      </Row>
      {sidebarData.map((data, index) => (
        <Row key={index}>
          <Col xs={5} md={3} lg={5}>
            <Image fluid src={data.thumbnail} />
          </Col>
          <Col xs={7} md={9} lg={7}>
            {data.title}
          </Col>
        </Row>
      ))}
    </>
  );
};

export default SidebarPopularComponent;
