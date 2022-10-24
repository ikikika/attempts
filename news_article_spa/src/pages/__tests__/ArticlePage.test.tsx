import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import ArticlePage from "../ArticlePage";

it("ArticlePage matches snapshot", () => {
  const initialState = {
    article: {
      data: {
        title: "Lorem ipsum",
        publishedDate: "2021-03-09T01:31:03",
        updatedDate: "2021-03-09T03:31:55",
        mediaImageData: {
          src: "test.png",
          byline: "lorem",
          description: "ipsum",
        },
        articleContent:
          "<p>lorem</p><p>ipsum</p><p>dolor</p><p>sit</p><p>amet</p><p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>",
        readAlsoData: [{ label: "lorem", title: "ipsum", link: "test.com" }],
        topicsData: [
          {
            name: "lorem",
            link: "ipsum.com",
          },
          {
            name: "dolor sit",
            link: "amet.com",
          },
        ],
        authorData: {
          title: "lorem ipsum",
          url: "test.com",
          thumbnail: "test.png",
        },
        category: {
          name: "dolor sit amet",
          link: "consectur.com",
        },
        subscriptionBoxData: {
          body: "lorem",
          placeholder: "ipsum",
          sub_description: "dolor",
          title: "sit",
          label: "amet",
        },
      },
    },
    sidebar: {
      data: [
        {
          title: "lorem",
          thumbnail: "ipsum.png",
          click_through_url: "dolor.com",
        },
        {
          title: "sit",
          thumbnail: "amet.png",
          click_through_url: "consecteur.com",
        },
      ],
    },
  };
  const mockStore = configureStore();
  let store = mockStore(initialState);

  const tree = renderer
    .create(
      <Provider store={store}>
        <ArticlePage />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
