import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// import storage from "redux-persist/lib/storage";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import interactionReducer from "./features/interactionSlice";
import viewsReducer from "./features/viewsSlice";
import categoryReducer from "./features/categorySlice";
import currencyReducer from "./features/currencySlice";

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const rootReducer = combineReducers({
  views: viewsReducer,
  interactions: interactionReducer,
  category: categoryReducer,
  currency: currencyReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["views", "interactions"],
  whitelist: ["category"],
  writeFailHandler: (error) => {
    console.log(error);
    throw new Error("something went wrong in PERSISTOR");
  },
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
