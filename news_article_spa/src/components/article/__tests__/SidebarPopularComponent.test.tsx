import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import SidebarPopularComponent from "../SidebarPopularComponent";

it("SidebarPopularComponent matches snapshot", () => {
  const initialState = {
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
        <SidebarPopularComponent />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
