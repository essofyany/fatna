import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: { categoryList: [] },
  reducers: {
    getCategories: (state, action) => {
      state.categoryList = action.payload;
    },
  },
});

export const { getCategories } = categorySlice.actions;
export default categorySlice.reducer;
