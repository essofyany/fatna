import { createSlice } from "@reduxjs/toolkit";

const sortSlice = createSlice({
  name: "sortMenu",
  initialState: {
    current: "Featured",
    // currentSort: "Featured",
  },
  reducers: {
    changeSort: (state, action) => {
      state.current = action.payload;
    },
  },
});

export const { changeSort } = sortSlice.actions;

export default sortSlice.reducer;
