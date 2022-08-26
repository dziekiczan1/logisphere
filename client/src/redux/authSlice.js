import { createSlice } from "@reduxjs/toolkit";
import * as api from "../api";

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch(authenticate(data));
    navigate("/");
  } catch (error) {
    console.log(error.message);
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch(authenticate(data));
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    authData: null,
  },
  reducers: {
    authenticate: (state, action) => {
      console.log(action);
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      return { ...state, authData: action?.payload };
    },
    logOut: (state, action) => {
      localStorage.clear();
      return { ...state, authData: null };
    },
  },
});

// Action creators are generated for each case reducer function
export const { authenticate, logOut } = authSlice.actions;
export default authSlice.reducer;
