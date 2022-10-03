import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sideBarSlice";
import articleReducer from "./articleSlice";
import headerReducer from "./headerSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    article: articleReducer,
    header: headerReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
