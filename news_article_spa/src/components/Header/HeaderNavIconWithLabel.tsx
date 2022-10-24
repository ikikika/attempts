import React from "react";
import { Nav } from "react-bootstrap";

interface Props {
  headerState: number;
  label: string;
  icon: JSX.Element;
}

const HeaderNavIconWithLabel = (props: Props) => {
  const { headerState, label, icon } = props;
  return (
    <Nav.Item>
      <Nav.Link>
        {icon}{" "}
        {headerState === 1 && <span className="icon-label">{label}</span>}
      </Nav.Link>
    </Nav.Item>
  );
};

export default HeaderNavIconWithLabel;
