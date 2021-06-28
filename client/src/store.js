import { configureStore } from "@reduxjs/toolkit";
import interactionReducer from "./features/interactionSlice";

export default configureStore({
  reducer: {
    interactions: interactionReducer,
  },
});
