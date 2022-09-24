import { configureStore } from "@reduxjs/toolkit";
import loadsReducer from "./loadSlice";
import authReducer from "./authSlice";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    loads: loadsReducer,
    auth: authReducer,
    user: userReducer,
  },
});

export default store;
