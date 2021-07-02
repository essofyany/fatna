import { createSlice } from "@reduxjs/toolkit";

const viewsSlice = createSlice({
  name: "views",
  initialState: {
    gridType: "",
    selectedView: {
      base: true,
      md: true,
      lg: true,
    },
  },
  reducers: {
    setView: (state, action) => {
      state.gridType = action.payload;
    },
    resetView: (state) => {
      state.selectedView = {
        base: true,
        md: true,
        lg: true,
      };
    },
    switchView: (state, action) => {
      if (action.payload === "base") {
        state.selectedView.base = false;
      } 
      if (action.payload === "md") {
        state.selectedView.md = false;
      }
      if (action.payload === "lg") {
        state.selectedView.lg = false;
      }
    },
  },
});

export const { setView, switchView, resetView } = viewsSlice.actions;
export default viewsSlice.reducer;
