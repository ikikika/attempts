import { createSlice } from "@reduxjs/toolkit";
import SideBarPropsType from "../types/SideBarPropsType";
import SidebarPopularData from "../data/sideBar_popular.json";

const sidebarData: SideBarPropsType[] = SidebarPopularData.items.map((data) => {
  return {
    title: data.title,
    thumbnail: data.thumbnail,
    click_through_url: data.click_through_url,
  };
});

const initialState = { data: {} };

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: initialState as { data: SideBarPropsType[] },
  reducers: {
    loadSidebarData(state) {
      state.data = sidebarData;
    },
  },
});

export const sidebarActions = sidebarSlice.actions;

export default sidebarSlice.reducer;
