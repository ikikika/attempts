import React from "react";
import renderer from "react-test-renderer";

import ArticleContentBodyComponent from "../ArticleContentBodyComponent";

it("ArticleContentBodyComponent matches snapshot", () => {
  const tree = renderer
    .create(
      <ArticleContentBodyComponent
        contentBodyData="<p>lorem</p><p>ipsum</p><p>dolor</p><p>sit</p><p>amet</p><p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>"
        readAlsoData={[{ label: "lorem", title: "ipsum", link: "test.com" }]}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
