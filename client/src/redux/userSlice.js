import { createSlice } from "@reduxjs/toolkit";
import * as api from "../api";

export const bookLoad = (id, load) => async (dispatch) => {
  try {
    const { data } = await api.bookLoad(id, load);
    dispatch(book(data));
  } catch (error) {
    console.log(error);
  }
};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    myloads: [],
  },
  reducers: {
    book: (loads, action) => {
      console.log(action.payload);
      return action.payload;
    },
  },
});

export const { book } = userSlice.actions;
export default userSlice.reducer;
