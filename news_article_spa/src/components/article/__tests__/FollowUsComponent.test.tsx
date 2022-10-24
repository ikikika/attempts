import React from "react";
import renderer from "react-test-renderer";

import FollowUsComponent from "../FollowUsComponent";

it("FollowUsComponent matches snapshot", () => {
  const tree = renderer.create(<FollowUsComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
