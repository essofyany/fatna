import { createSlice } from "@reduxjs/toolkit";

export const interactionSlice = createSlice({
  name: "interactions",
  initialState: {},
  reducers: {
    // onHeartToast: (state) => {
    //   state.heartToast = !state.heartToast;
    // },
  },
});

// Action creators are generated for each case reducer function
export const {} = interactionSlice.actions;

export default interactionSlice.reducer;
