import { configureStore } from "@reduxjs/toolkit";
import loadsReducer from "./loadSlice";

const store = configureStore({
  reducer: {
    loads: loadsReducer,
  },
});

export default store;
