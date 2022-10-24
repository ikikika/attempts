import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import HeaderComponent from "../HeaderComponent";

it("HeaderComponent matches snapshot", () => {
  const initialState = {
    article: {
      data: {
        title: "lorem ipsum",
        category: {
          name: "dolor sit amet",
          link: "consectur.com",
        },
      },
    },
    header: {
      data: [
        { title: "adipis", url: "elit.com" },
        { title: "sed do", url: "tempor.com" },
      ],
    },
  };
  const mockStore = configureStore();
  let store = mockStore(initialState);

  const tree = renderer
    .create(
      <Provider store={store}>
        <HeaderComponent />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
