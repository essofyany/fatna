import { createSlice } from "@reduxjs/toolkit";
import { currencies } from "../components/Materials/Currencies";

const currencySlice = createSlice({
  name: "currency",
  initialState: {
    current: currencies[0],
    currencyList: currencies,
  },
  reducers: {
    changeCurrency: (state, action) => {
      state.current = action.payload;
    },
  },
});

export const { changeCurrency } = currencySlice.actions;

export default currencySlice.reducer;
