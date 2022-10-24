import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import SubscribeComponent from "../SubscribeComponent";

it("SubscribeComponent matches snapshot", () => {
  const initialState = {
    article: {
      data: {
        subscriptionBoxData: {
          body: "lorem",
          placeholder: "ipsum",
          sub_description: "dolor",
          title: "sit",
          label: "amet",
        },
      },
    },
  };
  const mockStore = configureStore();
  let store = mockStore(initialState);

  const tree = renderer
    .create(
      <Provider store={store}>
        <SubscribeComponent />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
