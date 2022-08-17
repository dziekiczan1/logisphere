import { createSlice } from "@reduxjs/toolkit";
import * as api from "../api";

export const getLoads = () => async (dispatch) => {
  const { data } = await api.fetchLoads(); // data is destructed from response.data
  dispatch(fetchAllLoads(data));
};

export const createLoad = (load) => async (dispatch) => {
  try {
    const { data } = await api.createLoads(load);
    dispatch(createNewLoad(data));
  } catch (error) {
    console.log(error);
  }
};

export const loadSlice = createSlice({
  name: "loads",
  initialState: {
    loads: [],
  },
  reducers: {
    fetchAllLoads: (state, action) => {
      return action.payload;
    },
    createNewLoad: (state, action) => {
      return [...state, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchAllLoads, createNewLoad } = loadSlice.actions;
export default loadSlice.reducer;
