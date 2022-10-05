import { createSlice } from "@reduxjs/toolkit";

import HeaderDataJson from "../data/header.json";
import HeaderDataType from "../types/HeaderDataType";

const HeaderData: HeaderDataType[] = HeaderDataJson.map((data) => ({
  title: data.title,
  url: data.absolute_url,
}));

const initialState = { data: {} };

export const headerSlice = createSlice({
  name: "header",
  initialState: initialState as { data: HeaderDataType[] },
  reducers: {
    loadHeaderData(state) {
      state.data = HeaderData;
    },
  },
});

export const headerActions = headerSlice.actions;

export default headerSlice.reducer;
