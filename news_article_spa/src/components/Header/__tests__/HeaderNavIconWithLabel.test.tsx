import React from "react";
import renderer from "react-test-renderer";
import { PersonFill } from "react-bootstrap-icons";

import HeaderNavIconWithLabel from "../HeaderNavIconWithLabel";

it("HeaderNavIconWithLabel matches snapshot", () => {
  const tree = renderer
    .create(
      <HeaderNavIconWithLabel
        headerState={1}
        label="lorem"
        icon={<PersonFill />}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
