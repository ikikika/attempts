import React from "react";
import renderer from "react-test-renderer";

import SocialMediaWrapperComponent from "../SocialMediaWrapperComponent";

it("SocialMediaWrapperComponent matches snapshot", () => {
  const tree = renderer.create(<SocialMediaWrapperComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
