import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    openSearch: (state, action) => {},
  },
});

export const { openSearch } = searchSlice.actions;

export default searchSlice.reducer;
