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

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    data: sidebarData,
  } as { data: SideBarPropsType[] },
  reducers: {},
});

export default sidebarSlice.reducer;
