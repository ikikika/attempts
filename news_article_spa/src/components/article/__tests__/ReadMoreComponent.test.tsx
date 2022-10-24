import React from "react";
import renderer from "react-test-renderer";

import ReadMoreComponent from "../ReadMoreComponent";

it("ReadMoreComponent matches snapshot", () => {
  const tree = renderer.create(<ReadMoreComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
