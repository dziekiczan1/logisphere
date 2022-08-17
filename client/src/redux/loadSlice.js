import { createSlice } from "@reduxjs/toolkit";
import * as api from "../api";

export const getLoads = () => async (dispatch) => {
  const { data } = await api.fetchLoads(); // data is destructed from response.data
  dispatch(fetchAllLoads(data));
};

export const loadSlice = createSlice({
  name: "loads",
  initialState: {
    loads: [],
  },
  reducers: {
    fetchAllLoads: (state, action) => {
      return {
        action,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchAllLoads } = loadSlice.actions;
export default loadSlice.reducer;
