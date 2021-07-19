import { createSlice } from "@reduxjs/toolkit";

const viewsSlice = createSlice({
  name: "views",
  initialState: {
    gridTemplate: "",
  },
  reducers: {
    setView: (state, action) => {
      state.gridTemplate = action.payload;
    },
  },
});

export const { setView } = viewsSlice.actions;
export default viewsSlice.reducer;
