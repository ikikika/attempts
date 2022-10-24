import React from "react";
import renderer from "react-test-renderer";

import RelatedTopicsComponent from "../RelatedTopicsComponent";

it("RelatedTopicsComponent matches snapshot", () => {
  const tree = renderer
    .create(
      <RelatedTopicsComponent
        topicsData={[
          {
            name: "lorem",
            link: "ipsum.com",
          },
          {
            name: "dolor sit",
            link: "amet.com",
          },
        ]}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
