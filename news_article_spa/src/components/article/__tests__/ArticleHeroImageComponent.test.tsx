import React from "react";
import renderer from "react-test-renderer";

import ArticleHeroImageComponent from "../ArticleHeroImageComponent";

it("ArticleHeroImageComponent matches snapshot", () => {
  const tree = renderer
    .create(
      <ArticleHeroImageComponent
        mediaImageData={{
          src: "test.png",
          byline: "lorem",
          description: "ipsum",
        }}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
