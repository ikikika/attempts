import { createSlice } from "@reduxjs/toolkit";

import HeaderDataJson from "../data/header.json";
import HeaderDataType from "../types/HeaderDataType";

const HeaderData: HeaderDataType[] = HeaderDataJson.map((data) => ({
  title: data.title,
  url: data.absolute_url,
}));

export const headerSlice = createSlice({
  name: "header",
  initialState: {
    data: HeaderData,
  } as { data: HeaderDataType[] },
  reducers: {},
});

export default headerSlice.reducer;
