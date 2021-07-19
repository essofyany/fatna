import { createSlice } from "@reduxjs/toolkit";

const currencySlice = createSlice({
  name: "currency",
  initialState: {
    current: "USD",
    currencyList: ["USD", "EUR", "YEN", "PND", "RUP"],
  },
  reducers: {
    changeCurrency: (state, action) => {
      state.current = action.payload;
    },
  },
});

export const { changeCurrency } = currencySlice.actions;

export default currencySlice.reducer;
