import React from "react";
import renderer from "react-test-renderer";

import BylineComponent from "../BylineComponent";

it("BylineComponent matches snapshot", () => {
  const tree = renderer
    .create(
      <BylineComponent
        publishedDate="2021-03-09T01:31:03"
        updatedDate="2021-03-09T03:31:55"
        authorData={{
          title: "lorem ipsum",
          url: "test.com",
          thumbnail: "test.png",
        }}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
