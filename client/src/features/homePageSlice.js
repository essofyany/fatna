import { createSlice } from "@reduxjs/toolkit";

export const homePageSlice = createSlice({
  name: "homePage",
  initialState: {},
  reducers: {
    // onHeartToast: (state) => {
    //   state.heartToast = !state.heartToast;
    // },
  },
});

// Action creators are generated for each case reducer function
export const {} = homePageSlice.actions;

export default homePageSlice.reducer;
