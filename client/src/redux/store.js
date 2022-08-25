import { configureStore } from "@reduxjs/toolkit";
import loadsReducer from "./loadSlice";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    loads: loadsReducer,
auth: authReducer,
  },
});

export default store;
